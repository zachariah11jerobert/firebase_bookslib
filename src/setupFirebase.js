import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkgRHeDQoNaQpIAU3uDhsgH_zEZ8e72dQ",
  authDomain: "jerome-bookslib.firebaseapp.com",
  projectId: "jerome-bookslib",
  storageBucket: "jerome-bookslib.appspot.com",
  messagingSenderId: "217245449729",
  appId: "1:217245449729:web:df9aada545070a91514a00",
  measurementId: "G-DK5WX8W3MH",
};

firebase.initializeApp(firebaseConfig);
