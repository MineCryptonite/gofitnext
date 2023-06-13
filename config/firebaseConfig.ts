import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBeFzayi_niCDY3WqBXZYqR_Pyk0osl868",
    authDomain: "customer-management-6f127.firebaseapp.com",
    projectId: "customer-management-6f127",
    storageBucket: "customer-management-6f127.appspot.com",
    messagingSenderId: "925942846141",
    appId: "1:925942846141:web:0d403698ab478636a21dd4",
    measurementId: "G-F8JM7NRY1N"
  };

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db;

