import axios from "axios";

const token = "7cebc0bd449148cc9ab22d15297b9ee2";

const api = axios.create({
  baseURL: "https://newsapi.org/v2/",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: `Basic ${token}`,
  },
});

export default api;
