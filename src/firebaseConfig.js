import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBdHRIXoyj63Tv2HuY4UodRctK8DBtlVgQ",
  authDomain: "numeratesth.firebaseapp.com",
  projectId: "numeratesth",
  storageBucket: "numeratesth.appspot.com",
  messagingSenderId: "921925640041",
  appId: "1:921925640041:web:b0afebf10cbf8a0c7867f8",
  measurementId: "G-542QBB38MJ"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const db = firebase.firestore();
const auth = firebase.auth()
export { firebase, storage, db, auth};