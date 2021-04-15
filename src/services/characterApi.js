import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const favoriteCharacter = (name, idChar) => api.post('/character', { name, idChar });
const getAllCharacters = () => api.get('/favorites/characters');

export default {
  favoriteCharacter,
  getAllCharacters,
};
