import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAorNVaJdUNa86i1HU0SBBUYdDACjR-lRs",
  authDomain: "blogpost-e3c90.firebaseapp.com",
  databaseURL: "https://blogpost-e3c90-default-rtdb.firebaseio.com",
  projectId: "blogpost-e3c90",
  storageBucket: "blogpost-e3c90.appspot.com",
  messagingSenderId: "108706290291",
  appId: "1:108706290291:web:c98126fe68be8d74c3e806",
  measurementId: "G-6QEJMF7RPK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
