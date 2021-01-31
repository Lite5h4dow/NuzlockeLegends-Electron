import firebase from "firebase";
import "firebase/auth";
// import "firebase/functions";
import "firebase/firestore";

import * as firebaseConfig from "../../../../firebaseConfig.json";

export function initFirebase() {
  firebase.initializeApp(
    process.env.NODE_ENV === "development" ? firebaseConfig.development : firebaseConfig.production
  );
  firebase.analytics();

  if (process.env.NODE_ENV === "development") {
    console.log("linking to local emulators on dev environment");
    // firebase.functions().useEmulator("localhost", 5001);
    firebase.auth().useEmulator("http://localhost:9099/");
    firebase.firestore().useEmulator("localhost", 8080);
  }
  return firebase;
}

const fb = initFirebase();
export const auth = fb.auth;
export const app = fb.app;
export const firestore = fb.firestore;
// export const functions = fb.functions;

export default fb;
