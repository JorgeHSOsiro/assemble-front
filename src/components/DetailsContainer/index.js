import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeftShort, BsStar, BsStarFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import constant from '../../helper/variables';
import apiChar from '../../services/characterApi';
import apiCom from '../../services/comicsApi';
import './style.css';

const DetailsContainer = ({
  title,
  img,
  characters,
  creators,
  subject,
  id,
}) => {
  const [opt, setOpt] = useState('');
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    if (subject === 'comics') {
      setOpt('characters');
    } else {
      setOpt('comics');
    }
  }, []);

  const directToApi = async (sub, num) => {
    if (subject === 'characters') {
      await apiChar.favoriteCharacter(sub, num);
    } else {
      await apiCom.favoriteComics(sub, num);
    }
  };

  const selectFavorite = (option) => {
    if (option) {
      return setFavorite(false);
    }
    directToApi(title, id);
    return setFavorite(true);
  };

  return (
    <div className="details-container">
      <Link className="to-home" to="/home">
        <BsArrowLeftShort className="arrow-icon" />
        <p>Home</p>
      </Link>
      <h1 className="details-title">{title}</h1>
      <div className="details-header">
        <button
          onClick={ () => selectFavorite(favorite) }
          type="button"
        >
          {favorite ? <BsStarFill className="style-icon" /> : <BsStar className="style-icon" /> }
        </button>
      </div>
      <div className="image-container">
        <img
          className="hero-image"
          src={ `${img}/portrait_medium.jpg` }
          alt="hero"
        />
      </div>
      <div className="info1-container">
        {subject === 'comics' && opt === 'characters' ? <h3>Characters</h3> : <h3>Comics</h3>}
        {characters.length > constant.ZERO ? (
          characters.map((char) => (
            <a
              className="char-info1"
              href={ `/details/${subject}/${id}/${opt}/${char.name}` }
              key={ char.name }
            >
              <p>{char.name}</p>
            </a>
          ))
        ) : (
          <p className="not-found">Nothing found</p>
        )}
      </div>
      <div className="info2-container">
        {subject === 'comics' ? <h3>Creators</h3> : <h3>Series</h3>}
        {creators.length > constant.ZERO ? (
          creators.map((creator) => (
            <p className="char-info2" key={ creator.name }>
              {creator.name}
            </p>
          ))
        ) : (
          <p className="not-found">Nothing found</p>
        )}
      </div>
    </div>
  );
};

DetailsContainer.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  characters: PropTypes.arrayOf(PropTypes.string).isRequired,
  creators: PropTypes.arrayOf(PropTypes.string).isRequired,
  subject: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default DetailsContainer;
