import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDT-rXcmEy4TQsWKjBoaPD87hGQk5anmo4",
  authDomain: "final-project-3c5a7.firebaseapp.com",
  projectId: "final-project-3c5a7",
  storageBucket: "final-project-3c5a7.appspot.com",
  messagingSenderId: "187674776141",
  appId: "1:187674776141:web:ba0773c18e6a560548c204",
  measurementId: "G-YNJND8LPVY",
};

// инициализируем Firebase

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
