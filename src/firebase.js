
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeOsf6CqHmSjvmQ7oSmW5alOSED6GIT1c",
  authDomain: "burgerking-f90d7.firebaseapp.com",
  projectId: "burgerking-f90d7",
  storageBucket: "burgerking-f90d7.appspot.com",
  messagingSenderId: "366919946158",
  appId: "1:366919946158:web:79b8029679df17eefd823f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
export const auth = getAuth(firebaseApp);




