import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBoxWRufWCmKL4fbHOE8_GNwMdMn0KsYRE",
  authDomain: "project-website-49674.firebaseapp.com",
  projectId: "project-website-49674",
  storageBucket: "project-website-49674.appspot.com",
  messagingSenderId: "642239387762",
  appId: "1:642239387762:web:18c1977f56c1078f780aeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, db, storage };
