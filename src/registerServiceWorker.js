/* eslint-disable no-console */

import { register } from 'register-service-worker'

// Make sure sw are supported
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw_cached_page.js').then(function(registration) {
    console.log('Service Worker: Registered (Pages)');
  },function(error){
    console.log('Service worker registration failed:', error);
  });
}else{
  console.log('Service workers are not supported.');
}

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
