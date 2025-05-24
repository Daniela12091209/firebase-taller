import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDQJCNDRUph3JnLt118l7BW5r8lxansakQ",
  authDomain: "pokeapi2-30491.firebaseapp.com",
  projectId: "pokeapi2-30491",
  storageBucket: "pokeapi2-30491.firebasestorage.app",
  messagingSenderId: "121488869400",
  appId: "1:121488869400:web:a4fb8d3d48dde888aadb6d",
  measurementId: "G-E4GVHTP31X"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!

export { auth, db };