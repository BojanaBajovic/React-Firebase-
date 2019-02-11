import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCTr-ZENhmn1r6qbC0iMktXvmcTnrko0Wg",
    authDomain: "react-firebase-de5f2.firebaseapp.com",
    databaseURL: "https://react-firebase-de5f2.firebaseio.com",
    projectId: "react-firebase-de5f2",
    storageBucket: "react-firebase-de5f2.appspot.com",
    messagingSenderId: "351391104919"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;