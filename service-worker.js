// service-worker.js

const CACHE_NAME = 'careerlink-v1';
const ASSETS = [
  './',                  // root HTML
  'index.html',
  'style.css',
  'toggle.js',
  'onboarding.js',
  'transition.js',
  'logo_animated.svg',
  'logo.svg',
  'favicon.ico',
  'manifest.json'
];

// Install: cache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .catch(err => {
        console.warn(
          '⚠️ Service Worker install: some assets failed to cache, continuing anyway:',
          err
        );
        // swallow the error so install still succeeds
      })
  );
});

// Activate: remove old caches if any
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys =>
        Promise.all(
          keys
            .filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
        )
      )
  );
});

// Fetch: cache-first, then network, then fallback
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then(cachedResp => {
        if (cachedResp) {
          return cachedResp;
        }
        return fetch(event.request)
          .then(networkResp => {
            // Cache the new response for next time
            return caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, networkResp.clone());
                return networkResp;
              });
          });
      })
      .catch(err => {
        console.warn('Fetch failed; serving fallback if available:', err);
        // Optionally serve a fallback page or image here:
        // return caches.match('offline.html');
      })
  );
});
