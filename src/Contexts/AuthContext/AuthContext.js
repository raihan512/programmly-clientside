import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../../FirebaseConfig/Firebase.Config";
export const AuthProvider = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const user = { displayName: "Raihan Gazi" };
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(email, password);
  };
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const loginWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const authInfo = {
    user: user,
    createUser,
    login,
    loginWithGoogle,
    loginWithGithub,
  };
  return (
    <div>
      <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
    </div>
  );
};

export default AuthContext;
