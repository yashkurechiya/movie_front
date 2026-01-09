import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URI + '/api'
});

console.log(api);


api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token && token !== "undefined") {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
