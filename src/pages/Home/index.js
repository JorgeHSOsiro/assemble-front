import React, { useContext, useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import heroesContext from '../../context/heroesContext';
import marvelApi from '../../services/marvelAPi';
import MarvelCards from '../../components/Cards/MarvelCards';
import helper from '../../helper/variables';
import './style.css';

require('dotenv').config();

const Home = () => {
  const [resultArray, setResultArray] = useState([]);
  const { search, subject } = useContext(heroesContext);

  useEffect(() => {
    if (subject && search) {
      marvelApi.fetchMarvel(subject, search)
        .then((response) => response.json())
        .then((res) => setResultArray(res.data.results));
    }
  }, [search, subject]);

  return (
    <div>
      <Menu />
      {(!subject && !search) || resultArray.length === helper.ZERO ? (
        <div className="error-container">
          <h1>Nothing to show here!</h1>
          <h2>Hints</h2>
          <p>Some hero names requires a hífen(-). Example spider-man</p>
          <p>Others just an empty space should do the work. Example natasha romanoff</p>
        </div>
      ) : (
        <div className="items-container">
          {subject === 'comics'
            ? resultArray.map((comics) => (
              <MarvelCards
                key={ comics.id }
                img={ comics.thumbnail.path }
                title={ comics.title }
                id={ comics.id }
                type={ subject }
              />
            ))
            : resultArray.map((char) => (
              <MarvelCards
                key={ char.id }
                img={ char.thumbnail.path }
                title={ char.name }
                id={ char.id }
                type={ subject }
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;
