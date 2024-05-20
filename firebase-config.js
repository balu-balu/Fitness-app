// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMRC5uz055LuyHEGChC3X8rLN-7MWW4Uc",
    authDomain: "mobileapp-e70ab.firebaseapp.com",
    databaseURL: "https://mobileapp-e70ab-default-rtdb.firebaseio.com",
    projectId: "mobileapp-e70ab",
    storageBucket: "mobileapp-e70ab.appspot.com",
    messagingSenderId: "52373317865",
    appId: "1:52373317865:web:2ba3920967fa954b056878",
    measurementId: "G-7S5JLGWCT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const storage = getStorage(app);
const db = getFirestore(app);

// Initialize authentication with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { app, storage, db, auth };