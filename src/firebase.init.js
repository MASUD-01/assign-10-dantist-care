// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSaSTRJTFM_QXD1IkKw9m__eUBp0XB4Xs",
    authDomain: "dantist-car.firebaseapp.com",
    projectId: "dantist-car",
    storageBucket: "dantist-car.appspot.com",
    messagingSenderId: "1041410538206",
    appId: "1:1041410538206:web:332b4b38209df99242e04f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;