
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCUU-XwjBWcBxR026Z9XuLgBxXh9T2bSHw",
  authDomain: "ecommerce31145-4df94.firebaseapp.com",
  projectId: "ecommerce31145-4df94",
  storageBucket: "ecommerce31145-4df94.appspot.com",
  messagingSenderId: "1070015585446",
  appId: "1:1070015585446:web:4c215151a87950c2c0a867"
};


const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)