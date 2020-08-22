import firebase from "firebase/app";
import "firebase/auth";

import dotenv from "dotenv";

// dotenv.config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
};

const githubProvider = new firebase.auth.GithubAuthProvider();

const factory = () => {
  firebase.initializeApp(firebaseConfig);
  let auth = firebase.auth();
  return {
    auth() {
      return auth;
    },

    login() {
      return auth.signInWithPopup(githubProvider);
    },

    logout() {
      return auth.signOut();
    },
  };
};

export { factory };
