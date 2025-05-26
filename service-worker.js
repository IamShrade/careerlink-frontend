
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("careerlink-v1").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/dashboard.html",
        "/login.html",
        "/register.html",
        "/resume.html",
        "/applications.html",
        "/style.css",
        "/logo_animated.svg",
        "/favicon.ico",
        "/toggle.js",
        "/onboarding.js",
        "/transition.js"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
