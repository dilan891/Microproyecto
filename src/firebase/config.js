import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAb43xgSY4sIib3P9oEmnr7s-7Aw1ABj00",
    authDomain: "microproyecyo.firebaseapp.com",
    projectId: "microproyecyo",
    storageBucket: "microproyecyo.appspot.com",
    messagingSenderId: "1024595372453",
    appId: "1:1024595372453:web:2ac4571eeed8fb5877e04c"
};
  

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });