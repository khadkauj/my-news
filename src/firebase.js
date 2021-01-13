import firebase from 'firebase';
// here we intialize app with the line 3
// amd inside we provide necessary config keys we received from firebase
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC0DIWvVooqQoZaC52geUUJq005brGIlIA",
  authDomain: "linkdein-clone-yt-real.firebaseapp.com",
  projectId: "linkdein-clone-yt-real",
  storageBucket: "linkdein-clone-yt-real.appspot.com",
  messagingSenderId: "1006181291865",
  appId: "1:1006181291865:web:150a707f5bd4b473f8de48",
  measurementId: "G-1M0REW185Z"
});

const db = firebaseApp.firestore();
  //db is just a variable stadnig for database
const auth = firebase.auth();
// to get authentication; to have login options
export {db, auth};

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import firebase from './firebase';


// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDu56RLavWHJRkC3fWNWeM9G5YiZZS2UJ8",
//     authDomain: "linkedin-clone-yt-259be.firebaseapp.com",
//     projectId: "linkedin-clone-yt-259be",
//     storageBucket: "linkedin-clone-yt-259be.appspot.com",
//     messagingSenderId: "933725959034",
//     appId: "1:933725959034:web:eb2a99d4d7b66056b91cc3",
//     measurementId: "G-LP15S75JBY"
//   };

//   const firebase = firebase.initializeApp(firebaseConfig);
//   const db = firebaseApp.firestore();
//   const auth = firebase.auth();

//   export  default {db, auth};
