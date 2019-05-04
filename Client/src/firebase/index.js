import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAM0sBc5ZDQtnPzzwbOGuh7MxSSgqXiIZ0",
    authDomain: "nauman-marioplan.firebaseapp.com",
    databaseURL: "https://nauman-marioplan.firebaseio.com",
    projectId: "nauman-marioplan",
    storageBucket: "nauman-marioplan.appspot.com",
    messagingSenderId: "1064887092597",
    appId: "1:1064887092597:web:d4a91b0a7f93bb6c"
};
firebase.initializeApp(config);

const storage = firebase.storage();

export {
    storage, firebase as default
}