import * as firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  });
  
  export default app;