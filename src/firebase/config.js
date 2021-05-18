import firebase from 'firebase';

 const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyAnWoI7AEbr8k90MrZNxmW6LrVbR8dLCEQ",
  authDomain: "clone-4dd61.firebaseapp.com",
  projectId: "clone-4dd61",
  storageBucket: "clone-4dd61.appspot.com",
  messagingSenderId: "587453265519",
  appId: "1:587453265519:web:fe944b2f40c9a44cc13f9a",
  measurementId: "G-H1C3C4JYCR"
 }) 
 
const auth = firebaseapp.auth();

export { auth } 