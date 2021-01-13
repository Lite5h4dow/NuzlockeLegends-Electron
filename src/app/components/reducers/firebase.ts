import firebase from "firebase";

export function initFirebase() {
  var firebaseConfig = {
    apiKey: "AIzaSyAOJ-1EEXZVg5yJfeQFkP1RRk8Wsl3KXU4",
    authDomain: "leaguenuzlocke.firebaseapp.com",
    projectId: "leaguenuzlocke",
    storageBucket: "leaguenuzlocke.appspot.com",
    messagingSenderId: "416170210864",
    appId: "1:416170210864:web:52ef461c91406b7dc81ff5",
    measurementId: "G-561R9YJ31M",
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  if (process.env.NODE_ENV === "development") {
    console.log("linking to local emulators on dev environment");
    firebase.functions().useEmulator("localhost", 5001);
    firebase.auth().useEmulator("http://localhost:9099/");
    firebase.firestore().useEmulator("localhost", 8080);
  }
  return firebase;
}

const fb = initFirebase();
export const auth = fb.auth;
export const app = fb.app;
export const firestore = fb.firestore;
export const functions = fb.functions;

export default fb;
