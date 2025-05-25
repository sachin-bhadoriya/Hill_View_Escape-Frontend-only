import axios from "axios";

const api = axios.create({
  baseURL: "https://hill-view-backend-1.onrender.com",
});

export default api;

