import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIJUkspZV5LFGOW1IGPc8b6PgzhIsGGEE",
  authDomain: "zuhrdev-netflix-clone2.firebaseapp.com",
  projectId: "zuhrdev-netflix-clone2",
  storageBucket: "zuhrdev-netflix-clone2.appspot.com",
  messagingSenderId: "970806637670",
  appId: "1:970806637670:web:c18c214b11bb6d2343e9a7"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)