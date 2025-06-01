self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('lunch-roulette-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './icon.png',
        './opengraph.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
