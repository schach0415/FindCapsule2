import firebase from 'firebase'
// Required for side-effects
require('firebase/firestore')

const config = {
  apiKey: "AIzaSyDHL6JFTyBcaV60WpE4yXfeO0aZbzA9Xbk",
  authDomain: "practice-auth.firebaseapp.com",
  databaseURL: "https://practice-auth.firebaseio.com",
  projecId: "",
  storageBucket: "",
  messagingSenderId: "",
}

firebase.initializeApp(config)

export const ref = firebase.firestore()
export const firebaseAuth = firebase.auth