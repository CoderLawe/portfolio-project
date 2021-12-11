import firebase from "firebase/app";
import database from "firebase/database";
import 'firebase/firestore';

import "firebase/auth";

  const config = {
    apiKey: "AIzaSyCcq13s2oRajNDa0vfCc4R4xmeMCDR8s8Q",
    authDomain: "react-hulu-clone-85e94.firebaseapp.com",
    databaseURL: "https://react-hulu-clone-85e94-default-rtdb.firebaseio.com/",
    projectId: "react-hulu-clone-85e94",
    storageBucket: "react-hulu-clone-85e94.appspot.com",
    messagingSenderId: "464346959961",
    appId: "1:464346959961:web:6ee68ba2ebdd882265e148",
    measurementId: "G-LZWXNNJNFE",
  };
   
  let firebaseCache;
   

// const db = firebaseApp.firestore();
// const auth = firebase.auth();      //Grabbing three servcies from firebase and storing them in variables.
// const storage = firebase.storage(); //This should take care of the pictures

// export { auth, storage};

const fire = firebase.initializeApp(config);
const db = firebase.firestore();



   const getFirebase = () => {
    if (firebaseCache) {
      return firebaseCache;
    }
    firebaseCache = firebase;
    return firebase;
  };
export { db, getFirebase, fire};