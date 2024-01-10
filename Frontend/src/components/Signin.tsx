//
import {
  getAuth,
  sendSignInLinkToEmail,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../App";

const actionCodeSettings = {
  url: "https://localhost:5173", // Replace with your actual callback URL
  handleCodeInApp: true,
};

export const Signin = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");

  const provider = new GoogleAuthProvider(); // Define the GoogleAuthProvider

  async function onSignin() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential) {
          return;
        }
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  return (
    <div>
      <button onClick={onSignin}>Sign in with Google</button>{" "}
      {/* Fix the button to trigger onSignin */}
    </div>
  );
};
