import initializeAuthentication from "../components/Firebase/Firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

initializeAuthentication();
const provider = new GoogleAuthProvider();
const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const auth = getAuth();

  const signInUsingGoogle = () => {
    setIsLoading(true)
   return signInWithPopup(auth, provider);
  };

  const googleLogout = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(()=>setIsLoading(false))
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
      }
      setIsLoading(false)
    });
  }, []);

  return { user, signInUsingGoogle, googleLogout,isLoading };
};

export default UseFirebase;
