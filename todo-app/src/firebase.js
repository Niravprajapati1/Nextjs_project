import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({

  
});

const db = firebaseApp.firestore();

export default db;
