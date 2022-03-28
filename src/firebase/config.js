import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9m7BxHZjn8U8pIK9eJmnUj5FfdUBZ1o0",
  authDomain: "bikeapp-b45d0.firebaseapp.com",
  projectId: "bikeapp-b45d0",
  storageBucket: "bikeapp-b45d0.appspot.com",
  messagingSenderId: "656547968024",
  appId: "1:656547968024:web:863026e70f1e2762d2bf6d",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projectfirestore = firebase.firestore();
