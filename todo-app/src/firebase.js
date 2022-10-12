import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyAjWc7JDBeT_5iT7FjDpydDtlLmvL-o430",
    authDomain: "my-todo-9.firebaseapp.com",
    projectId: "my-todo-9",
    storageBucket: "my-todo-9.appspot.com",
    messagingSenderId: "640273002067",
    appId: "1:640273002067:web:459f131f421a6810cbe0a6",
    measurementId: "G-PWP39Q19WZ"
  
});

const db = firebaseApp.firestore();

export default db;
