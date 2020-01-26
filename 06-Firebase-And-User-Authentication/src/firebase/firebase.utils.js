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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('Error creating user', error);
        }
    }

    return userRef;
};

export default firebase;
