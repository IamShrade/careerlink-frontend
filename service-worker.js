// service-worker.js

const CACHE_NAME = 'careerlink-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/onboarding.js',
  '/toggle.js',
  '/logo.svg',
  '/favicon.ico',
  '/manifest.json',
  '/transition.js',
  // …only include files you actually have
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => 
        cache.addAll(ASSETS)
          .catch(err => {
            console.warn('Some assets failed to cache, but install will continue:', err);
            // Even if one asset 404s, we resolve to let the SW install succeed:
            return Promise.resolve();
          })
      )
  );
});
