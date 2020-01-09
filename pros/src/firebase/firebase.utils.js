import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDgf4wtRhvuigjP2igLp5sFrK6gYAFHXgM',
  authDomain: 'pros-cc0ca.firebaseapp.com',
  databaseURL: 'https://pros-cc0ca.firebaseio.com',
  projectId: 'pros-cc0ca',
  storageBucket: 'pros-cc0ca.appspot.com',
  messagingSenderId: '260153740611',
  appId: '1:260153740611:web:4f8bd7461f6bd57d6473f6',
  measurementId: 'G-GN6E7M2GX1'
};

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
      console.log('error creating user', error);
    }
  }
  return userRef;
  console.log(snapShot);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
