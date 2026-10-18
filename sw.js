// 🔌 SERVICE WORKER CORRECTOR - APP "NECESITO"
// PROPÓSITO: Romper el anclaje de Las Antaras 186 y forzar GPS móvil vivo.

const CACHE_NAME = 'necesito-v2';
// Solo guardamos en memoria la estructura visual básica, NUNCA la ubicación
const ASSETS = [
  './',
  './indice.html',
  './administrador.html',
  './manifiesto.json'
];

// Instalar el Service Worker y limpiar cachés antiguas
self.addEventListener('install', (evento) => {
  evento.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Forzar la activación inmediata en el celular de prueba
self.addEventListener('activate', (evento) => {
  evento.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key); // Borra la memoria vieja de la PC de escritorio
          }
        })
      );
    })
  );
  self.clients.claim();
});

// REGLA DE ORO: Filtrar las peticiones para evitar el anclaje de ubicación
self.addEventListener('fetch', (evento) => {
  const url = evento.request.url;

  // Si la petición es de Google Maps o Geolocalización, NO usar la memoria de la PC.
  // Forzar al teléfono a conectarse a internet o al satélite en tiempo real.
  if (url.includes('geolocation') || url.includes('://googleapis.com') || url.includes('maps.google')) {
    evento.respondWith(fetch(evento.request));
    return;
  }

  // Para el resto de la app visual, usar el comportamiento normal
  evento.respondWith(
    caches.match(evento.request).then((respuestaCache) => {
      return respuestaCache || fetch(evento.request);
    })
  );
});
