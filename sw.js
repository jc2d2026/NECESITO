// 🔌 SERVICE WORKER ULTRA LIGERO - APP "NECESITO"
const CACHE_NAME = 'necesito-final-v1';
const ASSETS = [
  './',
  './indice.html',
  './administrador.html',
  './manifiesto.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(
    keys.map((k) => { if (k !== CACHE_NAME) return caches.delete(k); })
  )));
  self.clients.claim();
});

// REGLA DE ORO: No interferir jamás con Google Maps ni el GPS en tiempo real
self.addEventListener('fetch', (e) => {
  const url = e.request.url;
  if (url.includes('maps') || url.includes('geolocation')) {
    e.respondWith(fetch(e.request));
    return;
  }
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
