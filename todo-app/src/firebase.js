import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCQnd4JlT00tVgBalaeM2FmxHYSMvlYLO8",
    authDomain: "todo-89420.firebaseapp.com",
    projectId: "todo-89420",
    storageBucket: "todo-89420.appspot.com",
    messagingSenderId: "596898004646",
    appId: "1:596898004646:web:c91169e611293dd349be67",
    measurementId: "G-57BC22PY34"
});

const db = firebaseApp.firestore();

export default db;
