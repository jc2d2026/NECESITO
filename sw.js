const CACHE_NAME = 'necesito-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://flaticon.com'
];

// Instalar el Service Worker y guardar la app en el celular
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activar el Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Responder de inmediato usando la memoria interna si no hay buena señal
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
