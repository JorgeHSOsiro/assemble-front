import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import HeroesContext from './heroesContext';

const Provider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [subject, setSubject] = useState('');

  const history = useHistory();

  const contextValue = {
    setSearch,
    setSubject,
    search,
    subject,
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      history.push('/login');
    }
  });

  return (
    <HeroesContext.Provider value={ contextValue }>
      {children}
    </HeroesContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
