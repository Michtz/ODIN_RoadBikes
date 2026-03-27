const CACHE_NAME = 'odinbikes-cache-v1';
const CLOUDINARY_CACHE_NAME = 'odinbikes-cloudinary-v1';
const CLOUDINARY_ORIGIN = 'https://res.cloudinary.com';
const ASSETS_TO_CACHE = ['/', '/manifest.webmanifest', '/favicon.ico'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }),
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter(
            (name) => name !== CACHE_NAME && name !== CLOUDINARY_CACHE_NAME,
          )
          .map((name) => caches.delete(name)),
      );
    }),
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Cache-first strategy for Cloudinary image assets
  if (url.origin === CLOUDINARY_ORIGIN) {
    event.respondWith(
      caches.open(CLOUDINARY_CACHE_NAME).then(async (cache) => {
        const cached = await cache.match(event.request);
        if (cached) return cached;
        const response = await fetch(event.request);
        cache.put(event.request, response.clone());
        return response;
      }),
    );
    return;
  }

  // Cache-first strategy for static assets
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});
