// 🌟 VERSIÓN DE LIMPIEZA ABSOLUTA - DESTRUYE LA CACHÉ CORRUPTA
const CACHE_NAME = 'necesito-limpieza-total';

self.addEventListener('install', e => {
  // Obliga al teléfono a activar este limpiador de inmediato
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    // Busca todas las memorias guardadas en el celular y las borra por completo
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          return caches.delete(cacheName); // Borra el código viejo congelado
        })
      );
    }).then(() => {
      // Desregistra el Service Worker del teléfono para liberar el audio y el botón
      return self.registration.unregister();
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Deja pasar las peticiones limpias directamente a internet sin guardar copias trabadas
  e.respondWith(fetch(e.request));
});
