import axios from "axios";

export const instance = axios.create({
  timeout: 5000,
  baseURL: "https://api.example.com",
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
