import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import app from './firebase';

export function authenticateWithGoogle(nav) {
  const provider = new GoogleAuthProvider();
  const auth = getAppAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      nav('/');
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}

export function getAppAuth() {
  return getAuth(app);
}
