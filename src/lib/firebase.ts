/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { initializeApp } from 'firebase/app'
import { useDeviceLanguage, getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyA-7AlaObbKW6NP_VL5miPKwQEKPOIT8mY",
  authDomain: "plinko-balls-bd87d.firebaseapp.com",
  projectId: "plinko-balls-bd87d",
  storageBucket: "plinko-balls-bd87d.appspot.com",
  messagingSenderId: "744261373872",
  appId: "1:744261373872:web:8e10935fd7fe8a629c9075",
  measurementId: "G-EZP4HZSYJ2"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const database = getDatabase(app)

useDeviceLanguage(auth)
