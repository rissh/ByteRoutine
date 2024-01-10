//

import "./App.css";
import { Landing } from "./components/landing";
import { Signin } from "./components/Signin";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATNFTYat-XnqnShUWYFbd0iHgGL3eNfrA",
  authDomain: "byteroutine.firebaseapp.com",
  projectId: "byteroutine",
  storageBucket: "byteroutine.appspot.com",
  messagingSenderId: "665020236345",
  appId: "1:665020236345:web:2a68b44c870124e40943e8",
  measurementId: "G-3C1C14PJHX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

function App() {
  //
  useEffect(() => {
    onAuthStateChanged(auth, function (user) {
      if (user) {
        console.log("This is the user: ", user);
      } else {
        // No user is signed in.
        console.log("There is no logged in user");
      }
    });
  }, []);

  //
  return (
    <>
      <div>
        <Signin />
      </div>
    </>
  );
}

export default App;
