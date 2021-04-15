import React, { useEffect, useState } from 'react';
import api from '../../services/comicsApi';

const FavComics = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    api.getAllComics().then((response) => {
      setComics(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Comics</h1>
      {comics.map((item) => (
        <a
          className="char-info1"
          href={ `/details/comics/${item.idCom}` }
          key={ item.id }
        >
          <p>{item.title}</p>
        </a>
      ))}
    </div>
  );
};

export default FavComics;
