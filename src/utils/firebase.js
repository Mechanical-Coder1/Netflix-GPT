
import {getAuth} from "firebase/auth"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs0MkMel6IW3-LFMBeBhSzO9vnBOH_5XY",
  authDomain: "netflixgpt-c2dd3.firebaseapp.com",
  projectId: "netflixgpt-c2dd3",
  storageBucket: "netflixgpt-c2dd3.appspot.com",
  messagingSenderId: "878814594863",
  appId: "1:878814594863:web:d869e5fc7678cc6d5f43da",
  measurementId: "G-NGMJY2WKFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
