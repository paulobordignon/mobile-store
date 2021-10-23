import axios from 'axios';

const { API } = process.env;

console.log(API);

const api = axios.create({
  baseURL: API,
});

export default api;
