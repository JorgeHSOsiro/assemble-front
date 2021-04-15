import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import marvelAPi from '../../services/marvelAPi';
import DetailsContainer from '../../components/DetailsContainer';
import constant from '../../helper/variables';

const DetailsPageBy = () => {
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [characters, setCharacters] = useState([]);
  const [creators, setCreators] = useState([]);
  const {
    id, subject, option, name,
  } = useParams();

  useEffect(async () => {
    marvelAPi
      .fetchDetailsBy(id, subject, name, option)
      .then((response) => response.json())
      .then((res) => res.data.results)
      .then((hero) => {
        if (hero.length > constant.ZERO) {
          if (option === 'comics') {
            setTitle(hero.title);
            setImg(hero.thumbnail.path);
            setCharacters(hero.characters.items);
            setCreators(hero.creators.items);
          } else {
            setTitle(hero[0].name);
            setImg(hero[0].thumbnail.path);
            setCharacters(hero[0].comics.items);
            setCreators(hero[0].series.items);
          }
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

export default DetailsPageBy;
