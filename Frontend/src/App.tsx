//

import "./App.css";
import { Landing } from "./components/landing";
import { Signin } from "./components/Signin";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { RecoilRoot, useRecoilState, useSetRecoilState } from "recoil";
import { userAtom } from "./store/atoms/user";
import { Topbar } from "./components/Topbar";
import { Card } from "./components/Card";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
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
  {
    return (
      <RecoilRoot>
        <StoreApp />
      </RecoilRoot>
    );
  }
}

function StoreApp() {
  const [user, setUser] = useRecoilState(userAtom);

  //
  useEffect(() => {
    onAuthStateChanged(auth, function (user) {
      if (user && user.email) {
        setUser({
          loading: false,
          user: {
            email: user.email,
          },
        });
      } else {
        setUser({
          loading: false,
        });
        // No user is signed in.
        console.log("There is no logged in user");
      }
    });
  }, []);

  if (user.loading) {
    return <div>loading ...</div>;
  }

  if (!user.user) {
    return (
      <div>
        <Signin />
      </div>
    );
  }

  //
  return (
    <div className="place-items-center grid">
      <div className="max-w-screen-lg w-full">
        <Topbar />
        <Card>hi there</Card>
      </div>
    </div>
  );
}

export default App;
