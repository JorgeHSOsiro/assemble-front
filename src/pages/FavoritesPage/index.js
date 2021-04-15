import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import FavChar from '../../components/FavCharacters';
import FavCom from '../../components/FavComics';
import './style.css';

const Favorite = () => (
  <div className="favorites-container">
    <Link className="to-home" to="/home">
      <BsArrowLeftShort className="arrow-icon" />
      <p>Home</p>
    </Link>
    <div className="favorites-content">
      <FavChar />
      <FavCom />
    </div>
  </div>
);

export default Favorite;
