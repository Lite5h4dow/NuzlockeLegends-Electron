import Axios from "axios";
import firebaseConfig from "../../../../firebaseConfig.json";

const axiosInstance = Axios.create({
  baseURL: process.env.NODE_ENV === "development" ? firebaseConfig.developmentURL : firebaseConfig.productionURL,
});

export default axiosInstance;
