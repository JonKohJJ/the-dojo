import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey:                 process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain:             process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId:              process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket:          process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId:      process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId:                  process.env.REACT_APP_FIREBASE_APPID
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }