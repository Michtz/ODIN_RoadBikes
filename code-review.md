# Code Review – OdinBikes Frontend

**Reviewed:** April 12, 2026  
**Scope:** All files in `src/`  
**Stack:** Next.js 14 (App Router), React, TypeScript, SCSS Modules

---

## Summary

---

## Issues by File

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
---

### `src/components/modals/Modal.tsx` & `src/components/modals/ConfirmModal.tsx`

🟡 **SHOULD – Import from non-existent path `@/styles/old/...`**

> `Modal.tsx` imports from `@/styles/old/system/Modal.module.scss` and `ConfirmModal.tsx` from `@/styles/old/modals/ConfirmModal.module.scss`. No `styles/old/` directory exists in the visible project structure. If these components are needed, the style paths need to be fixed. If they're not actively used (they appear to be leftover admin UI), they should be removed to avoid build failures.

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
