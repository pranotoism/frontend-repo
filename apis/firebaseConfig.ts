import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDOX28WRPW1WYsW2u6xH0Mrh7MunM9vobY',
  authDomain: 'ebuddy-54b94.firebaseapp.com',
  projectId: 'ebuddy-54b94',
  storageBucket: 'ebuddy-54b94.appspot.com',
  messagingSenderId: '2717559459',
  appId: '1:2717559459:web:753ad79a9bba95c377ad16',
  measurementId: 'G-H3PPX7XYXY',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
