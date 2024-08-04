import axios from 'axios';

const api = axios.create({
  baseURL: 'https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1', // URL base da API
});

export default api;
