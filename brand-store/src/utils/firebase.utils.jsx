import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbjocwtflHx8lkdDdF9GQYpKXbIu_9LRY",
  authDomain: "clovers-enterprise-db.firebaseapp.com",
  projectId: "clovers-enterprise-db",
  storageBucket: "clovers-enterprise-db.appspot.com",
  messagingSenderId: "78541398861",
  appId: "1:78541398861:web:8eb5cf0dbe5bab2781cd04",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  promt: 'select_account'
});

export const auth = getAuth();
export const SignInWithGooglePopup = () => signInWithPopup(auth, provider);
