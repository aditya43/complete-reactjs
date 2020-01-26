import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyDLW0h3zZV8MCSbaIHyItrTFtz2Y_091bE',
    authDomain: 'complete-reactjs.firebaseapp.com',
    databaseURL: 'https://complete-reactjs.firebaseio.com',
    projectId: 'complete-reactjs',
    storageBucket: 'complete-reactjs.appspot.com',
    messagingSenderId: '935145961464',
    appId: '1:935145961464:web:0c2ad912279daf49ae480d',
    measurementId: 'G-TZZTGG19R8'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
