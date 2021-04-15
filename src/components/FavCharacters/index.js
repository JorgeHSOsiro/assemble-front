import React, { useEffect, useState } from 'react';
import api from '../../services/characterApi';

const FavCharacters = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    api.getAllCharacters().then((response) => {
      setCharacters(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      {characters.map((item) => (
        <a
          className="char-info1"
          href={ `/details/characters/${item.idChar}` }
          key={ item.idChar }
        >
          <p>{item.name}</p>
        </a>
      ))}
    </div>
  );
};

export default FavCharacters;
