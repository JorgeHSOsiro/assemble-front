import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const favoriteComics = (title, idCom) => api.post('/comics', { title, idCom });
const getAllComics = () => api.get('/favorites/comics');

export default {
  favoriteComics,
  getAllComics,
};
