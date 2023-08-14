import axios from "axios";
import { Notify } from "quasar";
const token = localStorage.getItem("token");

const API_URL = "http://localhost:3000";
// const API_URL = 'https://api.initium.tarjetajovendiamante.com/api';

//console.log(token, "token desde api");

export const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "X-Custom-Header": "foobar",
    Authorization: `Bearer ${token}`,
  },
});

instance.defaults.headers.common["Content-Type"] = "apllication/json";

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.code === "ERR_NETWORK") {
      // 400
      Notify.create({
        message: "Verifica tu conexión a internet",
        type: "warning",
        icon: "report_problem",
      });
    }
    if (error?.code === "ERR_BAD_RESPONSE") {
      // 500
      Notify.create({
        message: "Vuelva a intentarlo más tarde",
        type: "warning",
        icon: "report_problem",
      });
    }
    console.log(error, "error desde api");
    return Promise.reject(error);
  }
);
