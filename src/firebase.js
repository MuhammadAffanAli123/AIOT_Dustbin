import * as firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyDX_OYwNSKLo1M6s8vJLa6iF7VLF22MdWw",
  authDomain: "iot-garbage-8e43b.firebaseapp.com",
  databaseURL: "https://iot-garbage-8e43b.firebaseio.com",
  projectId: "iot-garbage-8e43b",
  storageBucket: "iot-garbage-8e43b.appspot.com",
  messagingSenderId: "1064951945424",
  appId: "1:1064951945424:web:c5ce008d1e9c1c1ecca6d5",
  measurementId: "G-JW5XVEFK40"
};
firebase.initializeApp(firebaseConfig);

export default firebase;