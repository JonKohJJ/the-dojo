import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBwk5umUWamq8h42ci9jBFqc4vfeAQ4x-Y",
    authDomain: "thedojosite-33599.firebaseapp.com",
    projectId: "thedojosite-33599",
    storageBucket: "thedojosite-33599.appspot.com",
    messagingSenderId: "949834549011",
    appId: "1:949834549011:web:15c4e2e285f1bf96747ce6"
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