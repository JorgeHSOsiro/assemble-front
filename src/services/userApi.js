import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3306',
});

const login = (email, password) => api.post('/login', { email, password });
const register = (name, email, password) => api.post('/register', {
  name, email, password,
});
const update = (email, name, password) => api.put('/profile', { email, name, password });

export default {
  login,
  register,
  update,
};
