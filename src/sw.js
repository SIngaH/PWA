importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// const {NetworkFirst} = workbox.strategies;
const {registerRoute} = workbox.routing;
const {precacheAndRoute} = workbox.precaching;
// const {CacheFirst} = workbox.strategies;
const {StaleWhileRevalidate} = workbox.strategies;
const {setCatchHandler} = workbox.routing;


// registerRoute(
//   ({request}) => request.destination !== '',
//   new NetworkFirst()
// );

// registerRoute(
//   ({request}) => request.destination === 'style',
//   new CacheFirst()
// );

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
  {url: `./assets/css/nav-footer.css`, revision: null},
]);

registerRoute(({ url}) => url.pathname.startsWith("/"), new StaleWhileRevalidate());

setCatchHandler(({url, event, params}) =>{
    if(event.request.destination === "document"){
        return caches.match("/offline.html")
    }else{
        return Response.error();
    }
})

// if (workbox) {
//   console.log(`Yay! Workbox is loaded 🎉`);
// } else {
//   console.log(`Boo! Workbox didn't load 😬`);
// }