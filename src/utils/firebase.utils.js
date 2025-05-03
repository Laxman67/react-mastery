// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAlqDsx58duWAjwONp4yCQY5ssUxl56Jd4',
  authDomain: 'crown-clothing-db-266df.firebaseapp.com',
  projectId: 'crown-clothing-db-266df',
  storageBucket: 'crown-clothing-db-266df.firebasestorage.app',
  messagingSenderId: '729237565157',
  appId: '1:729237565157:web:7904b579656fcbe991ae0c',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});
// export const auth = getAuth(firebaseApp);
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);
