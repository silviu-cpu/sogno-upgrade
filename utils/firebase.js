import * as firebase from 'firebase/app';
import "firebase/firestore";
import { getFirestore } from 'firebase/firestore';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBMdSjBTksUo4g14d88owZ3r3oXEqgzfXg",
    authDomain: "last-sogno.firebaseapp.com",
    projectId: "last-sogno",
    storageBucket: "last-sogno.appspot.com",
    messagingSenderId: "602550191391",
    appId: "1:602550191391:web:ac459f8542e3ee32b3dc2a",
    measurementId: "G-JXLKJVGZ6J"
  };


const app =initializeApp(firebaseConfig)
const db = getFirestore(app);


export default db;