import firebase from 'firebase/app';
import 'firebase/auth';
// import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBwhbxcBsSOisiEsxvURVb7R8H2OXq17M0",
    authDomain: "todo-firebase-774b9.firebaseapp.com",
    projectId: "todo-firebase-774b9",
    storageBucket: "todo-firebase-774b9.appspot.com",
    messagingSenderId: "598590585154",
    appId: "1:598590585154:web:e76c5bc567e4acd0ff30db",
    measurementId: "G-1NY03DPNYZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;