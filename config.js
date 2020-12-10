import * as firebase from "firebase";
require("@firebase/firestore");
var firebaseConfig = {
        apiKey: "AIzaSyAjEhSOLswe5zX2FXkflgFLBypWRMzPd0Q",
        authDomain: "story-hub-9b1b9.firebaseapp.com",
        projectId: "story-hub-9b1b9",
        storageBucket: "story-hub-9b1b9.appspot.com",
        messagingSenderId: "1053561204723",
        appId: "1:1053561204723:web:7157fee55232870e0fec86"
};
// Initialize Firebase
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
