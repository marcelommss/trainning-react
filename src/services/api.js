import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL:  apiURL,
});

export default api;
