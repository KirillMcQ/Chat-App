import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyABSuHYhHsF3BKWmx8XHizGSCjgUSmGJFk',
  authDomain: 'chatapp-39386.firebaseapp.com',
  projectId: 'chatapp-39386',
  storageBucket: 'chatapp-39386.appspot.com',
  messagingSenderId: '1016853351986',
  appId: '1:1016853351986:web:bbe29993f56acd1a0db62b',
  measurementId: 'G-487E41R7Z4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
