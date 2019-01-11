import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCVPdNbsu58nn69ghTrATXcSPxtn2KLa3M",
  authDomain: "rommanel-colecoes.firebaseapp.com",
  databaseURL: "https://rommanel-colecoes.firebaseio.com",
  projectId: "rommanel-colecoes",
  storageBucket: "rommanel-colecoes.appspot.com",
  messagingSenderId: "727361524075"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
