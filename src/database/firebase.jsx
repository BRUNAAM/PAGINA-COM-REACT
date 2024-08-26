// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8glYV2NQAQIRl9XFMUIuzQwlPLOKS-Iw",
  authDomain: "projeto-a082b.firebaseapp.com",
  databaseURL: "https://projeto-a082b-default-rtdb.firebaseio.com",
  projectId: "projeto-a082b",
  storageBucket: "projeto-a082b.appspot.com",
  messagingSenderId: "571122658608",
  appId: "1:571122658608:web:60e2dda9ad5d5e63126cf5",
  measurementId: "G-N4ESJNCZW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db
