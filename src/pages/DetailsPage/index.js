import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import marvelAPi from '../../services/marvelAPi';
import DetailsContainer from '../../components/DetailsContainer';

const DetailsPage = () => {
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [characters, setCharacters] = useState([]);
  const [creators, setCreators] = useState([]);
  const { id, subject } = useParams();

  useEffect(async () => {
    marvelAPi
      .fetchDetails(id, subject)
      .then((response) => response.json())
      .then((res) => res.data.results[0]).then((hero) => {
        if (subject === 'comics') {
          setTitle(hero.title);
          setImg(hero.thumbnail.path);
          setCharacters(hero.characters.items);
          setCreators(hero.creators.items);
        } else {
          setTitle(hero.name);
          setImg(hero.thumbnail.path);
          setCharacters(hero.comics.items);
          setCreators(hero.series.items);
        }
      });
  }, []);

  return (
    <div>
      <DetailsContainer
        title={ title }
        img={ img }
        characters={ characters }
        creators={ creators }
        subject={ subject }
        id={ id }
      />
    </div>
  );
};

export default DetailsPage;
