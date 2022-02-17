import axios from "axios";

const token = "b326d03c9928402c8b9b395a3a029c62";

const api = axios.create({
  baseURL: "https://newsapi.org/v2/",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: `Basic ${token}`,
  },
});

export default api;
