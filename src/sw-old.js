const cacheName = `static-cache-v8`;
const filesToCache = [
    `./`,
    `./offline.html`,
    `./assets/css/index/index.css`,
    `./assets/js/stickyNav.js`,
    `./assets/js/education-li.js`,
    `./assets/css/general.css`,
    `./assets/css/nav-footer.css`,
    `./assets/css/variables.css`,
    `./assets/images/SIH-192.png`,
    `./assets/images/SIH-512.png`
];

self.addEventListener('install', function(event) {
    console.log('Service Worker Installed');
    event.waitUntil(
      caches.open(cacheName)
      .then(function(cache) {
        console.log('[ServiceWorker] Caching app shell');
        cache.addAll(filesToCache);
      }) 
    );
});

self.addEventListener(`activate`, function(event){
    console.log("activated ", event)
    event.waitUntil(
        caches.keys()
        .then(function(keys){
            console.log(keys);
            return Promise.all(keys.filter((key) => key !== cacheName).map((key) => caches.delete(key)))
        })
    );
});
/*
self.addEventListener(`activate`, (e) =>{
    e.waitUntil(
        caches.keys().then((cacheNames) =>{
            cacheNames.map((e) =>{
                if(e !== cacheName) caches.delete(e);
            })
        })
    )
})*/

self.addEventListener(`fetch`, function(event){
    console.log(`fetch `, event);
    // if (event.request.url.endsWith('.png')) {
    //     // Referencing workbox.strategies will now work as expected.
    //     const cacheFirst = new workbox.strategies.CacheFirst();
    //     event.respondWith(cacheFirst.handle({request: event.request}));
    //   }
    
    event.respondWith(   
        caches.open(cacheName)
        .then(function(cache){
            return cache.match(event.request)
            .then(function(response){
                return(
                    response || fetch(event.request)
                    .then(function(response){
                        cache.put(event.request, response.clone());
                        return response;
                    })
                );
            })
            .catch(function(){
                return caches.match(`./offline.html`); 
            });
        })
    );
});


//https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker#using_the_cache_api_in_the_service_worker