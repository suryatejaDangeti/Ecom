import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { getRemoteConfig, fetchAndActivate, getValue } from 'firebase/remote-config';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGIGhwinTQEPSgvtoE4OLJAHjACNhB_ig",
    authDomain: "try-db-ccc11.firebaseapp.com",
    projectId: "try-db-ccc11",
    storageBucket: "try-db-ccc11.appspot.com",
    messagingSenderId: "344443002371",
    // appId: "1:344443002371:web:689ffe9196916b882b7836"
    appId: "1:344443002371:web:a65a18d2505305722b7836"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const fetchRemoteConfig = async () => {
    const remoteConfigInstance = getRemoteConfig();

    try {
        await fetchAndActivate(remoteConfigInstance);
        // console.log(firebase.remoteConfig.Value, "firebase.remoteConfig.Value");
        const firebaseRemoteConfig = getValue(remoteConfigInstance, "web_footerCard_data").asString();
        console.log(firebaseRemoteConfig, "web_footerCard_data");
        return firebaseRemoteConfig;
    } catch (error) {
        console.error("Error fetching remote config:", error);
    }
};

fetchRemoteConfig();



// Remote config
// let remoteConfig = getRemoteConfig();
// remoteConfig
// .fetchAndActivate()
// .then(activated => {
//   if (!activated) console.log('not activated');
//   return remoteConfig.getAll();
// })
// console.log(remoteConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

// const char* DisplayIdentityProviders(firebase::auth::Auth& auth,
//     const char* email) {
// // Get results of most recent call to FetchProvidersForEmail().
// firebase::Future future =
// auth.FetchProvidersForEmailLastResult();
// const firebase::auth::Auth::FetchProvidersResult* result =
// future.result();


export const DisplayIdentityProviders = async (email) => {
    const myAuth = auth.app;
    const future = await fetchSignInMethodsForEmail(auth, email)
    console.log(future)
}

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    if(!userSnapshot.exists()) {
        const { firstName, email, surname, phone } = userAuth;
        const createAt = new Date();
        
        try {
            await setDoc(userDocRef, {
                firstName,
                surname,
                email,
                createAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }

    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email) {
        console.log('called');
    } 
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}