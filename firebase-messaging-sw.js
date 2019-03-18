importScripts('https://www.gstatic.com/firebasejs/5.8.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.8.4/firebase-messaging.js');

  // Initialize Firebase
  var config = {
    messagingSenderId: "110859357842"
  };
  firebase.initializeApp(config);

  const messaging = firebase.messaging();
  messaging.setBackgroundMessageHandler(function( payload){
    var snd = new Audio('sound/alerta.mp3');
    snd.play();
  //   console.log('[firebase-messaging-sw.js] Received background message ', payload);
  //   // // Customize notification here
    var notificationTitle = 'Background Message Title';
    var notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
    console.log(payload);
    return self.registration.showNotification(notificationTitle,
    notificationOptions);
    // return self.registration.showNotification('HOLA',{body:"como"});
  });
