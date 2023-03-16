"use client"
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBRsF2VhMxbb9LLYy3GSsrT7HC3kO3O7R8",
    authDomain: "blackat-acf2d.firebaseapp.com",
    projectId: "blackat-acf2d",
    storageBucket: "blackat-acf2d.appspot.com",
    messagingSenderId: "121074045326",
    appId: "1:121074045326:web:2d1012a379c814e7e894df",
    measurementId: "G-M6NQR39QQ6"
    };



export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)