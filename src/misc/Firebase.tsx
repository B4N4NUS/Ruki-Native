// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"
import 'firebase/compat/auth'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0Q36ez3RdXpYZKT2viz-pqSOkKEUeA6c",
    authDomain: "ruki-913d3.firebaseapp.com",
    projectId: "ruki-913d3",
    storageBucket: "ruki-913d3.appspot.com",
    messagingSenderId: "165462279786",
    appId: "1:165462279786:web:9ca170d167f9f424912c13"
};

// Initialize Firebase
let app
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}
const auth = firebase.auth()
const db = getFirestore(app)

const provider = new GoogleAuthProvider();


// Попап для входа в гугл
const getPopUpSign = async () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}

// Проверка на показ онбординга
const isFirstTimeInApp = async () => {
    try {
        const docRef = doc(db, "showOnboarding", auth.currentUser.email)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            return false
        } else {
            return true
        }
    } catch (e) {
        alert(e.message)
    }
}

// Запись результата прохождения онбординга
const storeOnboarding = async () => {
    try {
        const docRef = await setDoc(doc(db, "showOnboargind", auth.currentUser.email), {
            shown: true
        })
    } catch (e) {
        alert(e.message)
    }
}

// Получения информации о группах пользователя
const getUserData = async () => {
    try {
        const docRef = doc(db, "users", auth.currentUser.email)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            return docSnap.data().data
        } else {
            console.log("No users")
            return { data: [] }
        }
    } catch (e) {
        alert(e.message)
    }
}

// Сохранение групп пользователя
const storeUserData = async (value) => {
    try {
        const docRef = await setDoc(doc(db, "users", auth.currentUser.email), {
            data: value
        })
    } catch (e) {
        alert(e.message)
    }
}


export { auth, app, db, getFirestore, doc, setDoc, getDoc, getUserData, storeUserData, getPopUpSign, isFirstTimeInApp, storeOnboarding}