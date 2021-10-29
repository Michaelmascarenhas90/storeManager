import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_API_URL });

api.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("user-grupo-sa")) {
      const token = JSON.parse(localStorage.getItem("user-grupo-sa")).token;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default api;
