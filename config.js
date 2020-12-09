import * as firebase from 'firebase'
require('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyA49vSrQHW4ikFep5I3H6Y07ZHCEbEbNhA",
    authDomain: "wily-app-9b9a7.firebaseapp.com",
    projectId: "wily-app-9b9a7",
    storageBucket: "wily-app-9b9a7.appspot.com",
    messagingSenderId: "350068603963",
    appId: "1:350068603963:web:a3a33a25f3ca3e612e701e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

