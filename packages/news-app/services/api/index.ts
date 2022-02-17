import axios from "axios";

const token = "43d65e569c8542fd8f57ff7ef9c72348";

const api = axios.create({
  baseURL: "https://newsapi.org/v2/",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: `Basic ${token}`,
  },
});

export default api;
