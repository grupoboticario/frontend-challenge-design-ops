import axios from 'axios';

const token = 'f9506c236dc945f0850b9b4dc03bd443';

const httpRequest = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    Authorization: `Basic ${token}`,
  },
});

export default httpRequest;
