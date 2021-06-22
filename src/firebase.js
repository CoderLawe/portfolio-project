import firebase from "firebase/app";
import database from "firebase/database";
  const config = {
    apiKey: "AIzaSyCcq13s2oRajNDa0vfCc4R4xmeMCDR8s8Q",
    authDomain: "react-hulu-clone-85e94.firebaseapp.com",
    projectId: "react-hulu-clone-85e94",
    storageBucket: "react-hulu-clone-85e94.appspot.com",
    messagingSenderId: "464346959961",
    appId: "1:464346959961:web:6ee68ba2ebdd882265e148",
    measurementId: "G-LZWXNNJNFE",
  };
   
  let firebaseCache;
   
  export const getFirebase = () => {
    if (firebaseCache) {
      return firebaseCache;
    }
   
    firebase.initializeApp(config);
    firebaseCache = firebase;
    return firebase;
  };