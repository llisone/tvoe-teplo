self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('tvoe-teplo').then(c => c.addAll([
            '/', '/index.html', '/style.css', '/script.js', '/icon.png'
        ]))
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(r => r || fetch(e.request))
    );
});