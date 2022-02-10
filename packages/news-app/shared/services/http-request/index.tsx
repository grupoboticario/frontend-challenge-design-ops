import axios from 'axios';

// const token = 'f9506c236dc945f0850b9b4dc03bd443';
const token = 'b326d03c9928402c8b9b395a3a029c62';

const httpRequest = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    Authorization: `Basic ${token}`,
  },
});

export default httpRequest;
