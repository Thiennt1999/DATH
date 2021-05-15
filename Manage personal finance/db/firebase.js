import firebase from 'firebase';
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
require('firebase/auth');
import 'firebase/database';
const firebaseConfig = {
  apiKey: "AIzaSyB0hsv378bVNfDGXERwiXqAg3VxqRGJ57Y",
  authDomain: "dath-4780c.firebaseapp.com",
  projectId: "dath-4780c",
  storageBucket: "dath-4780c.appspot.com",
  messagingSenderId: "896673415576",
  appId: "1:896673415576:android:9e72362d1df4d6bb9d2bed",
  measurementId: "G-GC6V9WSG47"
};
  firebase.initializeApp(firebaseConfig);
  export default firebase;