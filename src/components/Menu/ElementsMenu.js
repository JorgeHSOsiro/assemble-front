import React from 'react';
import Buttons from './buttons';
import './style.css';

function ElementsMenu() {
  return (
    <div className="side-menu-container">
      {Buttons('Meu perfil', '/profile')}
      {Buttons('Favorites', '/favorites')}
      {Buttons('Sair', '/login')}
    </div>
  );
}
export default ElementsMenu;
