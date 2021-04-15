import React, { useContext, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import heroesContext from '../../context/heroesContext';
import './style.css';

const SearchBar = () => {
  const [word, setWord] = useState('');
  const [radio, setRadio] = useState('');
  const { setSearch, setSubject } = useContext(heroesContext);

  const sendParams = (comic, option) => {
    setSearch(comic);
    setSubject(option);
  };

  return (
    <div>
      <h2>Search for comics or characters</h2>
      <form className="search-form" method="GET">
        <div className="input-container">
          <label htmlFor="searchInput">
            <input onChange={ (e) => setWord(e.target.value) } type="text" name="searchInput" id="searchInput" />
          </label>
          <div className="radio-content">
            <label htmlFor="comics">
              <input type="radio" name="subject" value="comics" onChange={ (e) => setRadio(e.target.value) } />
              Comics
            </label>
            <label htmlFor="characters">
              <input type="radio" name="subject" value="characters" onChange={ (e) => setRadio(e.target.value) } />
              Characters
            </label>
          </div>
        </div>
        <button className="search-btn" type="button" onClick={ () => sendParams(word, radio) }>
          <BsSearch className="search-icon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
