import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmVA2RDOiEUyPvmdYIxI23TfBPJ2bQAtY",
  authDomain: "dyma-2b61a.firebaseapp.com",
  projectId: "dyma-2b61a",
  storageBucket: "dyma-2b61a.appspot.com",
  messagingSenderId: "192592758065",
  appId: "1:192592758065:web:3a1cb74aaa538133cd9c10",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
