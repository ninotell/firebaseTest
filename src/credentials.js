// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNA-CvYSF2nFp48yPNaQkLrB_DrQMSdiU",
  authDomain: "fir-reacttest-6e513.firebaseapp.com",
  projectId: "fir-reacttest-6e513",
  storageBucket: "fir-reacttest-6e513.appspot.com",
  messagingSenderId: "524094385722",
  appId: "1:524094385722:web:75913be449c79d8a8c8f03"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp