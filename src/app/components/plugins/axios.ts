import Axios from "axios";
import firebaseConfig from "../../../../firebaseConfig.json";

export const firebaseInstance = Axios.create({
  baseURL: process.env.NODE_ENV === "development" ? firebaseConfig.developmentURL : firebaseConfig.productionURL,
});

export const clientInstance = Axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "https://172.27.0.1:2999/" : "https://127.0.0.1:2999/",
});
