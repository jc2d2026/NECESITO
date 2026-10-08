const CACHE_NAME = 'necesito-v3'; 
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Instalar y forzar al teléfono a destruir la memoria vieja en el acto
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activar y eliminar cualquier copia corrupta del pasado (Borra el google.com1)
self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME];
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName); 
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Procesar peticiones de forma fluida y veloz
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      if (res) {
        return res;
      }
      return fetch(e.request);
    })
  );
});
