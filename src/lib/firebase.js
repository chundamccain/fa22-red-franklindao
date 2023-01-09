import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { initializeFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// }

const firebaseConfig = {
  apiKey: "AIzaSyDSn_-LuY0YYPBFR8Yo2X6tAtf3BrD7hfU",
  authDomain: "franklindao-b3970.firebaseapp.com",
  projectId: "franklindao-b3970",
  storageBucket: "franklindao-b3970.appspot.com",
  messagingSenderId: "686690434696",
  appId: "1:686690434696:web:76f8cb36822bf9b2eb693d",
  measurementId: "G-RWM71P0EL2",
}

const initFirebase = firebase.initializeApp(firebaseConfig)
const db = initFirebase.firestore()
db.settings({
  experimentalForceLongPolling: true,
  useFetchStreams: false,
})

export default db