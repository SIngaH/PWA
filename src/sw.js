importScripts("https://unpkg.com/idb@5.0.4/build/iife/index-min.js");

const cacheName = `static-cache-v8`;
const filesToCache = [`./`, `./offline.html`, `./assets/css/index/index.css`, `./assets/js/stickyNav.js`, `./assets/js/education-li.js`, `./assets/css/general.css`, `./assets/css/nav-footer.css`, `./assets/css/variables.css`, `./assets/images/SIH-192.png`, `./assets/images/SIH-512.png`];

async function createDatabase(){
    const db = idb.openDB("products", 1, {
        upgrade(db, oldVersion, newVersion, transaction){
            var store = db.createObjectStore("beverages", {
                keyPath: "id"
            });
            store.put({id: 123, name: "coke", price: 8.22, quantity: 200}),
            store.put({id: 222, name: "water", price: 2.22, quantity: 100}),
            store.put({id: 333, name: "pepsi", price: 5.22, quantity: 300})
        }
    })
} 
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
    createDatabase();
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


// ------------------b4 indexeddb
/*
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const {registerRoute} = workbox.routing;
const {precacheAndRoute} = workbox.precaching;
const {StaleWhileRevalidate} = workbox.strategies;
const {setCatchHandler} = workbox.routing;

precacheAndRoute([
  {url: '/index.html', revision: null },
  {url: `./offline.html`, revision: null},
  {url: `./assets/css/index/index.css`, revision: null},
  {url: `./assets/images/SIH-192.png`, revision: null},
  {url: `./assets/images/SIH-512.png`, revision: null},
  {url: `./assets/css/variables.css`, revision: null},
  {url: `./assets/js/stickyNav.js`, revision: null},
  {url: `./assets/js/education-li.js`, revision: null},
  {url: `./assets/css/general.css`, revision: null},
  {url: `./assets/css/nav-footer.css`, revision: null} 
]);

registerRoute(({ url}) => url.pathname.startsWith("/"), new StaleWhileRevalidate());

setCatchHandler(({url, event, params}) =>{
    if(event.request.destination === "document"){
        return caches.match("/offline.html")
    }else{
        return Response.error();
    }
});*/


// ------------------------old
// const {CacheFirst} = workbox.strategies;
// const {NetworkFirst} = workbox.strategies;


// registerRoute(
//   ({request}) => request.destination !== '',
//   new NetworkFirst()
// );

// registerRoute(
//   ({request}) => request.destination === 'style',
//   new CacheFirst()
// );

// if (workbox) {
//   console.log(`Yay! Workbox is loaded 🎉`);
// } else {
//   console.log(`Boo! Workbox didn't load 😬`);
// }