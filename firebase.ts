// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBiLbNzhlSK0xth8eLZPy23gNGV9sx8imE',
  authDomain: 'netflix-clone-3eda8.firebaseapp.com',
  projectId: 'netflix-clone-3eda8',
  storageBucket: 'netflix-clone-3eda8.appspot.com',
  messagingSenderId: '738250150583',
  appId: '1:738250150583:web:bc08df79b805e196167332',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
