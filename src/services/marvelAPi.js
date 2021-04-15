import md5 from 'crypto-js/md5';

require('dotenv').config();

const PUBLIC_KEY = process.env.REACT_APP_PUBLICKEY;
const PRIVATE_KEY = process.env.REACT_APP_PRIVATEKEY;
const marvelApi = 'http://gateway.marvel.com/v1/public';
const ts = new Date();
const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();

const fetchMarvel = async (option, search) => {
  if (option === 'comics') {
    return fetch(`${marvelApi}/${option}?titleStartsWith=${search}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`);
  }
  return fetch(`${marvelApi}/${option}?nameStartsWith=${search}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`);
};

const fetchDetails = async (id, subject) => fetch(`${marvelApi}/${subject}/${id}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`);

const fetchDetailsBy = async (id, subject, name, option) => {
  if (option === 'comics') {
    return fetch(`${marvelApi}/${subject}/${id}/${option}?title=${name}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`);
  }
  return fetch(`${marvelApi}/${subject}/${id}/${option}?name=${name}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`);
};

export default { fetchMarvel, fetchDetails, fetchDetailsBy };
