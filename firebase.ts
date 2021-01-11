import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

export const config = {
  apiKey: 'AIzaSyBxEpQcbzPeIKuzH_z3a4g2UGA8SJ_nHvY',
  authDomain: 'rs-clone-146b4.firebaseapp.com',
  projectId: 'rs-clone-146b4',
  storageBucket: 'rs-clone-146b4.appspot.com',
  messagingSenderId: '901037680438',
  appId: '1:901037680438:web:89a4bb79b249fdefb4f597',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const db = firebase.firestore();

export const auth = firebase.auth();

export const storageRef = firebase.storage().ref();

export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
