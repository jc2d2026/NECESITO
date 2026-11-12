const CACHE_NAME = 'necesito-final-v2';
const ASSETS = [
  './',
  './index.html',
  './administrador.html',
  './manifest.json'
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

self.addEventListener('fetch', (e) => {
  const url = e.request.url;
  if (url.includes('maps') || url.includes('google') || url.includes('geolocation')) {
    e.respondWith(fetch(e.request));
    return;
  }
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
