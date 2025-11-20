const CACHE_NAME = 'ishihara-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/manifest.json'
    // Tambahkan 'icon.png' jika Anda punya file lokalnya
];

// Install Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS))
    );
});

// Fetch Data (Gunakan Cache jika offline)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});