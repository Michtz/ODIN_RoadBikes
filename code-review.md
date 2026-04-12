# Code Review – OdinBikes Frontend

**Reviewed:** April 12, 2026  
**Scope:** All files in `src/`  
**Stack:** Next.js 14 (App Router), React, TypeScript, SCSS Modules

---

## Summary

This is a focused, well-structured marketing/e-commerce frontend for a Swiss custom bike brand. The code quality is above average for a small project: there's consistent use of TypeScript, a clean component architecture with SCSS Modules, thoughtful SEO with rich JSON-LD structured data, and solid scroll-animation UX.

**Biggest strengths:**
- Clear, consistent component naming and file structure
- Proper SSR-friendly patterns (dynamic imports, `'use client'` used deliberately)
- Good SEO implementation (metadata, JSON-LD, Open Graph, sitemap)
- The custom `Select`, `Input`, and `Button` components are polished and well-typed

**Biggest concerns:**
- Two critical features are silently broken: **the Calculator component returns `null` immediately** and **the Configurator page renders the Home page instead**
- **Google Analytics fires without waiting for cookie consent** (GDPR/DSG risk)
- **The cookie banner is commented out** in `ClientProviders`
- A significant amount of dead code from a previous project (auth types, socket types, cart hook, order types, etc.) is polluting the codebase
- A scroll animation `useEffect` has state values in its dependency array, causing event listeners to be re-registered on every single scroll event

---

## Issues by File

---

### `src/components/system/calculator/Calculator.tsx`

🔴 **MUST – Component permanently returns `null`, breaking Rules of Hooks**

> Line 123: `return null;` appears before all hooks (`useForm`, `useState`, `useEffect`). This means the Calculator always renders nothing, AND it violates the Rules of Hooks (hooks must not be called after a conditional/early return). React will throw an error in strict mode, and the feature is completely non-functional.
>
> The `CalculatorClient.tsx` lazily imports this component, and both `HomeContainer` and `ProductPageContainer` render it — meaning every page shows an empty section where the calculator should be.
>
> ```tsx
> // Current (broken):
> export const Calculator: React.FC = () => {
>   return null;         // ← early return here
>   const { register, handleSubmit, watch } = useForm(...); // hooks after return = violation
>   ...
> };
>
> // Fix: Remove the early return, or guard the full component body properly
> ```

🟡 **SHOULD – Placeholder prices in `CALCULATOR_OPTIONS`**

> The component data contains obviously fake prices (alternating `1000` and `10000` for all options across all categories). Before re-enabling this component these need to be replaced with real pricing data.

---

### `src/app/configurator/page.tsx`

🔴 **MUST – Configurator page renders `HomeContainer` instead of `ConfiguratorContainer`**

> Line 14–15: The configurator page returns `<HomeContainer />`. The real configurator is commented out. Users navigating to `/configurator` see the home page content with no indication anything is wrong. This also means the configurator URL in the sitemap points to a broken experience.
>
> ```tsx
> // Current:
> export default function ConfiguratorPage() {
>   return <HomeContainer />;        // ← wrong
>   // return <ConfiguratorContainer />;
> }
>
> // Fix: Either enable ConfiguratorContainer, or redirect to home until ready:
> import { redirect } from 'next/navigation';
> export default function ConfiguratorPage() {
>   redirect('/');
> }
> ```

---

### `src/components/system/scorllVideoHero/ScrollHeroVideo.tsx`

🔴 **MUST – Scroll and resize listeners re-registered on every scroll (severe performance issue)**

> Line 115: The `useEffect` dependency array is `[showLogo, showImageOverlay, showImageOverlayProp]`. Both `showLogo` and `showImageOverlayInternal` are state values that are set inside `updateVideoPosition()`, which is called by the scroll handler. This creates a feedback loop: scroll fires → state updates → effect re-runs → listeners are removed and re-added → next scroll fires the new listener. On every frame of scrolling, the browser is removing and re-adding event listeners. This is very expensive.
>
> ```tsx
> // Fix: Remove state values from the dependency array.
> // Use a ref to track showLogo and showImageOverlayInternal instead of state,
> // so the effect doesn't need to re-run when they change.
>
> const showLogoRef = useRef(false);
> const showImageOverlayInternalRef = useRef(false);
>
> useEffect(() => {
>   // register scroll/resize listeners once
>   window.addEventListener('scroll', handleScroll, { passive: true });
>   window.addEventListener('resize', handleResize);
>   return () => {
>     window.removeEventListener('scroll', handleScroll);
>     window.removeEventListener('resize', handleResize);
>   };
> }, [showImageOverlayProp]); // Only re-register if the prop changes
> ```

🟡 **SHOULD – Folder name typo**

> The folder is named `scorllVideoHero` (double `l`, transposed). Should be `scrollVideoHero`. Minor, but looks unprofessional and makes tab-completion harder.

---

### `src/app/layout.tsx`

🔴 **MUST – Google Analytics fires without cookie consent (GDPR/DSG violation)**

> Lines 425–436: The GA4 script loads unconditionally via `strategy="afterInteractive"`. The `CookieProvider` and `CookieBanner` exist in the codebase, but the banner is **commented out** in `ClientProviders.tsx`. Google Analytics collects personal data (IP, browser info, etc.) and must not fire before the user gives consent under GDPR and Swiss DSG.
>
> Fix: Uncomment `<CookieBanner />`, and conditionally load the GA script only after `acceptCookies()` is called. The simplest approach is to move the `<Script>` tags inside a component that reads from the `CookieContext`.

🟡 **SHOULD – JSON-LD price discrepancy**

> The root layout's JSON-LD for the Gravity product (line 179) shows `"price": "4500"`, but the actual product page and marketing copy say "ab CHF 3450". The structured data shown to Google search differs from what's advertised. Fix the JSON-LD to match `"3450"` and add `"minPrice"` semantics appropriately.

---

### `src/providers/ClientProviders.tsx`

🔴 **MUST – Cookie banner is commented out**

> Line 28: `{/*<CookieBanner />*/}` — the cookie banner is suppressed. Combined with the GA script loading unconditionally, the site currently collects analytics data on all visitors without consent. Uncomment this line as part of fixing the GDPR issue above.

---

### `src/proxy.ts`

🟡 **SHOULD – Middleware file is misnamed and never runs**

> Next.js App Router only recognizes middleware in a file named `middleware.ts` at the project root (or `src/middleware.ts`). The file `src/proxy.ts` exports a `proxy` function and a `config` matcher, but because it has the wrong name, **it is never executed by Next.js**. Any intended middleware logic (auth guards, redirects, A/B testing, headers) is silently skipped.
>
> Fix: Rename to `src/middleware.ts` and rename the export to `middleware` as required by Next.js:
> ```ts
> // src/middleware.ts
> export function middleware(request: NextRequest) {
>   return NextResponse.next();
> }
> export const config = { matcher: [...] };
> ```

---

### `src/components/containers/ConfiguratorContainer.tsx`

🟡 **SHOULD – `handleSelectionChange` updates image based on stale state**

> Lines 56–62: When a user clicks an option, `handleSelectionChange` calls `setSelections(...)` to update the state, but then immediately reads `selectedOptionsList` (which was computed from the **previous** state) to find the new option's image. The image will always lag one click behind.
>
> Fix: Look up the new image directly from `dummyBikeData` using the `groupId` and `optionId` arguments, without relying on `selectedOptionsList`:
> ```tsx
> const handleSelectionChange = (groupId: string, optionId: string) => {
>   setSelections((prev) => ({ ...prev, [groupId]: optionId }));
>   const group = dummyBikeData.groups.find((g) => g.id === groupId);
>   const option = group?.items.find((item) => item.id === optionId);
>   if (option?.image) setImage(option.image);
> };
> ```

🟡 **SHOULD – `console.log` statements in production code**

> Lines 51, 58, 62: Three `console.log` calls inside `handleSelectionChange`. These expose internal state in the browser console and should be removed before launch.

🟡 **SHOULD – `useEffect` depends on a module-level constant**

> Line 48: `useEffect(() => {...}, [dummyBikeData])` with an `eslint-disable` comment. `dummyBikeData` is a static module-level object that never changes, so this is effectively `[]` but obscures intent. Remove the dependency and the eslint suppression comment:
> ```tsx
> useEffect(() => {
>   setSelections({ [dummyBikeData.groups[0].id]: dummyBikeData.groups[0].items[0].id });
>   setImage(dummyBikeData.defaultImage);
> }, []); // runs once on mount
> ```

---

### `src/components/containers/HomeContainer.tsx`

🟡 **SHOULD – Slide description text is cut off mid-sentence**

> Line 67: The Slide section text ends with `"...Aus unserer Erfahrung mit Bikefitting wissen wir, dass die meisten"` — an incomplete sentence. This visible truncation will look broken to users and crawlers. Either complete the sentence or use the same quality of copy as the Gravity section.

---

### `src/components/containers/CategoriesContainer.tsx`

🟡 **SHOULD – `any[]` type for `items` and `items2`**

> Lines 16, 36: Both item arrays are typed as `any[]`. The correct type is already defined and exported from `ImageHoverTextContainer`:
> ```tsx
> // Fix:
> import type { ImageHoverTextContainerItem } from '@/components/system/imageHoverTextContainer/ImageHoverTextContainer';
> const items: ImageHoverTextContainerItem[] = [...];
> const items2: ImageHoverTextContainerItem[] = [...];
> ```

🟡 **SHOULD – Duplicated item data with different images**

> `items` and `items2` define the same two bikes (same title/text/url) but with different images. The intent seems to be showing frame-only vs full-bike variants. This should be a single array with a property distinguishing image type, not two separate arrays.

---

### `src/components/modals/BookingModal.tsx`

🟡 **SHOULD – Hardcoded placeholder Cal.com embed ID**

> Line 44: `id={'1234568'}` — this looks like a test/placeholder value. If Cal.com uses this ID for initialization state, it could conflict with other instances. Verify this is the correct production ID or remove it if not required.

🟡 **SHOULD – Duplicate `document.body.style.overflow` management**

> Both `BookingModal.tsx` (lines 22–29) and `BookingModalProvider.tsx` (lines 34–43) set `document.body.style.overflow = 'hidden'` for the same modal open/close event. This redundancy means cleanup happens twice and the second cleanup could race with the first. Manage overflow in one place only — the provider is the better owner.

---

### `src/components/modals/DeleteModal.tsx` & `src/components/modals/ConfirmModal.tsx`

🟡 **SHOULD – Import from non-existent path `@/styles/old/...`**

> `DeleteModal.tsx` imports from `@/styles/old/system/Modal.module.scss` and `ConfirmModal.tsx` from `@/styles/old/modals/ConfirmModal.module.scss`. No `styles/old/` directory exists in the visible project structure. If these components are needed, the style paths need to be fixed. If they're not actively used (they appear to be leftover admin UI), they should be removed to avoid build failures.

---

### `src/components/system/mapFacade/MapFacade.tsx`

🟡 **SHOULD – Click-only map facade, not keyboard accessible**

> The map placeholder div uses `onClick` but has no `role`, `tabIndex`, or `onKeyDown` handler. Keyboard-only users cannot load the map.
>
> ```tsx
> <div
>   onClick={() => setShowMap(true)}
>   onKeyDown={(e) => e.key === 'Enter' && setShowMap(true)}
>   role="button"
>   tabIndex={0}
>   aria-label="Karte laden – Standort Horw"
>   ...
> >
> ```

---

### `src/components/system/imageGridContainer/ScrollStaggeredGrid.tsx`

🟡 **SHOULD – `any` type in `splitIntoParts`**

> Line 48: `splitIntoParts = (arr: any[], parts: number)`. Replace with a generic:
> ```tsx
> const splitIntoParts = <T,>(arr: T[], parts: number): T[][] => { ... }
> ```

🟢 **COULD – Image alt texts use the raw URL string**

> Line 108: `alt={\`${src}\`}` — image alt text is the full Cloudinary URL, which is meaningless to screen readers and poor for SEO. Pass meaningful alt text from the caller or use a generic descriptive string like `"OdinBikes Fahrrad"`.

---

### `src/app/not-found.tsx`

🟢 **COULD – 404 silently redirects to home**

> The not-found page simply calls `redirect('/')`. While functional, users who land on a broken URL get no feedback that the page doesn't exist. A simple 404 page with a message and a link back to home would be better for UX. It also means users who bookmark a bad URL will always just end up on the home page with no explanation.

---

### `src/components/sections/product/ProductPageContainer.tsx`

🟢 **COULD – Hardcoded title text doesn't match both bike models**

> Line 30: `title={'Beste Geometry zum klettern'}` is always shown regardless of whether `view` is `'gravity'` or `'slide'`. The Gravity is the climbing-focused bike, but this label is also shown for the Slide. Move this text into the `GeometryData` interface so each bike can have its own section heading.

---

### `src/components/system/link/Link.tsx`

🟢 **COULD – Custom Link reimplements Next.js `<Link>` behaviour**

> The custom `Link` component manually uses `router.push()` and a custom prefetch mechanism instead of Next.js's built-in `<Link>`. This loses automatic prefetching on hover, scroll-restoration, and compatibility with future Next.js features. The added functionality (additionalAction, decoration, icon slots) could be built as a wrapper around `next/link` instead of replacing it.

---

### `src/components/system/select/Select.tsx`

🟢 **COULD – Platform detection via `navigator.userAgent` is unreliable**

> Line 66: `navigator.userAgent.toLowerCase()` is used to detect Apple devices (and render native vs custom dropdown). User agent sniffing is fragile and deprecated. The real goal is to detect if the native select renders well — consider using feature detection or simply always using the custom dropdown (it's already well-implemented).

---

### `src/components/system/button/Button.tsx`

🟢 **COULD – Duplicate `useEffect` calls in `ButtonGroup`**

> Lines 141–147 and 152–165 in `ButtonGroup` do the same responsive width check: once on mount and once on resize. These can be combined into a single `useEffect` with a `ResizeObserver` (or at minimum merged into one effect that runs on both mount and resize).

---

### `src/data/ConfiguratorData.js`

🟢 **COULD – JavaScript file in a TypeScript project**

> The file uses `.js` instead of `.ts`. TypeScript types for this data are already defined in `ConfiguratorContainer.tsx`. Move the type definitions to a shared types file and rename `ConfiguratorData.js` to `ConfiguratorData.ts`.

---

### `src/components/system/ServiceWorkerRegistration.tsx`

🟢 **COULD – `console.log` in production service worker registration**

> Line 13: `console.log('Service Worker registered with scope:', registration.scope)` logs to the console in production (the guard `process.env.NODE_ENV !== 'production'` only skips registration in dev, not the log message). This is minor but adds noise to production browser consoles.

---

## Issues by Category (Cross-File)

### Dead Code / Commented-Out Code

The codebase contains a notable amount of commented-out navigation items in `Header.tsx` (Gravelbikes link, Configurator link, Parts link), all wrapped in JSX comments. This is fine during development but should be cleaned up before considering the site production-ready — either remove the items or track the work in git issues.

The `Calculator` component (`Calculator.tsx`) is entirely disabled via `return null` on line 123. All the code below that line is unreachable. This is the most impactful piece of dead code.

`src/proxy.ts` is dead — it will never execute as middleware because of the filename.

### TypeScript Weaknesses

The most notable `any` usages are in `CategoriesContainer.tsx` (`any[]`), `ScrollStaggeredGrid.tsx` (`arr: any[]`), `ModalProvide.tsx` (`onCallback?: (...args: any[]) => void`), `ButtonGroupOption` (`sharedProps: Record<string, any>`), and `auth.ts` (`data: { preferences: any }`).

None of these are blocking, but the two in container-level components (`CategoriesContainer`, `ScrollStaggeredGrid`) are easy wins.

### Wrong-Project / Orphaned Files

Several files appear to have been carried over from a different, more complex e-commerce/booking application and are not used anywhere in the current OdinBikes frontend:

- `src/types/auth.ts` — user auth/session types (no auth in this app)
- `src/types/blog.types.ts` — blog post types
- `src/types/booking.types.ts` — booking system types (different from Cal.com)
- `src/types/order.types.ts` — e-commerce order types
- `src/types/request.types.ts` — API request types
- `src/types/schedule.types.ts` — schedule types
- `src/types/service.types.ts` — service types
- `src/types/socket.types.ts` — WebSocket types
- `src/hooks/SideCartHook.tsx` — shopping cart state
- `src/hooks/ModalProvide.tsx` — generic modal system (used only by `ConfirmModal`/`DeleteModal` which are also unused)
- `src/utils/Logger.class.ts` — logger class (never imported anywhere in the codebase)

These 11 files add ~400 lines of type and hook definitions that are never used. They should be deleted to reduce confusion for new contributors and keep the codebase clean.

### Duplicated Logic

The same 12-image array is hardcoded in three separate places:
- `HomeContainer.tsx` (lines 91–105)
- `ProductPageContainer.tsx` (lines 56–70)
- `AboutUsContainer.tsx` (lines 41–55)
- `CategoriesContainer.tsx` (lines 103–118)

Extract this into a constant in a shared data file:
```tsx
// src/data/gallery_images.ts
export const GALLERY_IMAGES = [
  'https://res.cloudinary.com/.../014_bike_frame_grey...',
  ...
];
```

### Performance

The main performance concern is the `ScrollHeroVideo` useEffect issue described above (event listeners added/removed on every scroll event). The scroll animation components (`ScrollDeepDiveBike`, `MidScrollVideoPlayer`, `ScrollStaggeredGrid`) all correctly use `{ passive: true }` and properly clean up listeners — good practice throughout.

### Accessibility

- `MapFacade` div is not keyboard-accessible (needs `role="button"`, `tabIndex`, `onKeyDown`)
- `ImageHoverTextContainer` card items use `onClick` with `router.push()` — these should be `<a>` tags or wrapped in a `<Link>` to support right-click → "Open in new tab" and keyboard navigation
- `ScrollStaggeredGrid` image alt texts are the raw CDN URLs — these need descriptive alt text
- The `MaterialIcon` component always sets `aria-hidden="true"` which is correct for decorative icons, but icons used as the only content of interactive elements (e.g., the `HamburgerIcon`) need a visible or `sr-only` label

### Security / Legal

- Google Analytics running without cookie consent gate is the most significant issue. Under Swiss DSG (in effect since 2023) and GDPR, analytics requiring consent must not fire until consent is obtained. The `CookieBanner` and `CookieProvider` are already built — they just need to be re-enabled and the GA script made conditional.

---

## Top 5 Priority Fixes

**1. Re-enable cookie consent and gate Google Analytics behind it**
The `<CookieBanner />` is commented out in `ClientProviders.tsx` while GA4 loads for every visitor. This is a legal compliance issue under GDPR/DSG. Uncomment the banner and make the GA `<Script>` conditional on consent.

**2. Fix the `Calculator` component (remove the `return null` early return)**
The entire calculator section on every product and category page is invisible. This appears to be a work-in-progress that got accidentally committed with the disable in place. Decide: either restore the component properly or hide the section at the container level (not inside the component itself).

**3. Fix the Configurator page to not render `HomeContainer`**
`/configurator` is in the sitemap and linked from the nav. It currently shows the home page. Either wire up `ConfiguratorContainer` properly, or redirect to a "coming soon" page.

**4. Fix `ScrollHeroVideo` useEffect dependency array**
The effect re-registers scroll/resize listeners on every scroll event due to state values in the dependency array. This is causing significant jank on the hero section — especially visible on lower-end devices. Refactor to use refs for the internal state that needs to be read inside the scroll handler.

**5. Fix the `handleSelectionChange` image update bug in `ConfiguratorContainer`**
The image preview always shows the previous selection because it reads from stale state. Fix by looking up the image directly from `dummyBikeData` using the function arguments (see fix above). Also remove the three `console.log` calls from this handler.

---

*Report covers all files in `src/` — 130+ TypeScript/JavaScript files, reviewed file by file.*
