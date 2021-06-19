// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp  = firebase.initializeApp ({
    apiKey: "AIzaSyCcq13s2oRajNDa0vfCc4R4xmeMCDR8s8Q",
    authDomain: "react-hulu-clone-85e94.firebaseapp.com",
    projectId: "react-hulu-clone-85e94",
    storageBucket: "react-hulu-clone-85e94.appspot.com",
    messagingSenderId: "464346959961",
    appId: "1:464346959961:web:6ee68ba2ebdd882265e148",
    measurementId: "G-LZWXNNJNFE"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();      //Grabbing three servcies from firebase and storing them in variables.
  const storage = firebase.storage(); //This should take care of the pictures
  
  export { db, auth, storage};

  
