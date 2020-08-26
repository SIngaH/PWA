if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('../../sw.js')
    .then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
  //https://developers.google.com/web/fundamentals/primers/service-workers
  
  let deferredPrompt;
  
  window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the mini-infobar from appearing on mobile
    event.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = event;

    document.querySelector(".install-offline").classList.toggle("hidden", false);
  });

  document.querySelector(".install-offline").addEventListener('click', () => {
    document.querySelector(".install-offline").classList.add("hidden");
    // Show the install prompt
    deferredPrompt.prompt();
    deferredPrompt.userChoice
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
    });
    
  });
}  
//https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications
// Notifications
Notification.requestPermission(function(status){
  console.log("Notification premission status: ", status)
  if(Notification.permission === "granted"){
    navigator.serviceWorker.getRegistration()
    .then(function(reg){
      let options = {
        body: "This is the body of the notification",
        icon: "./assets/images/SIH-192.png",
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        },
        actions: [
          {action: 'explore', title: 'Explore this new world',
            icon: './assets/images/notifications/check.png'},
          {action: 'close', title: 'Close notification',
            icon: './assets/images/notifications/x.png'},
        ]
      }
      reg.showNotification("This is the headline of the notification", options);
    });
  }
});

