

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxphAAqfjb6zazho8prqgieUtARx2CWFs",
  authDomain: "netflix-react-clone-a4a2c.firebaseapp.com",
  projectId: "netflix-react-clone-a4a2c",
  storageBucket: "netflix-react-clone-a4a2c.appspot.com",
  messagingSenderId: "114757648167",
  appId: "1:114757648167:web:a7928db8b064dff6bff302"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app); 