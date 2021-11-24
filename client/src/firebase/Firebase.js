// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgKea883mnrfKCN1Oo8VoGzlipY6Znnjw",
  authDomain: "mishpatimyafim-13dc7.firebaseapp.com",
  databaseURL: "https://mishpatimyafim-13dc7.firebaseio.com",
  projectId: "mishpatimyafim-13dc7",
  storageBucket: "mishpatimyafim-13dc7.appspot.com",
  messagingSenderId: "477029435659",
  appId: "1:477029435659:web:7b28bf1af5baa99094fa0e",
  measurementId: "G-QDF052NVNQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
