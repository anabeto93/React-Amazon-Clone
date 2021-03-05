import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDtpgC5MWuPYavG2QKpqdESR_LjQdgc72c",
    authDomain: "challenge-62d91.firebaseapp.com",
    projectId: "challenge-62d91",
    storageBucket: "challenge-62d91.appspot.com",
    messagingSenderId: "391887136046",
    appId: "1:391887136046:web:c22a1c6666ecaad85946bf",
    measurementId: "G-1GWGF8MFYQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };