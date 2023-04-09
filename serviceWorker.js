const staticLilBaghdad = 'lil-baghdad-site-v1';
const assets = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/images/logo.png',
    'https://fonts.googleapis.com/css2?family=Figtree:wght@300..600&display=swap'
]

self.addEventListener('install', installEvent => {
    installEvent.waitUntil(
        caches.open(staticLilBaghdad).then(cache => {
            cache.addAll(assets);
        })
    )
})

self.addEventListener('fetch', fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    )
})