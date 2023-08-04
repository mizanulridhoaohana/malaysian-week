// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase, ref} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx1SXPYarGZ6_YLklEfY32kvWGnO0pjRw",
  authDomain: "malaysian-week.firebaseapp.com",
  databaseURL: "https://malaysian-week-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "malaysian-week",
  storageBucket: "malaysian-week.appspot.com",
  messagingSenderId: "235036927318",
  appId: "1:235036927318:web:cfeec7e60cff81fb0ca2f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const dbRef = ref(getDatabase(app));
