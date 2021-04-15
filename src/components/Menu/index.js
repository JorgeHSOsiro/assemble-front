import React, { useState } from 'react';

import { BsJustify } from 'react-icons/bs';
import './style.css';

import ElementsMenu from './ElementsMenu';
import SearchBar from '../searchBar';

function renderTopMenu(openMenu, setOpenMenu) {
  return openMenu === true ? setOpenMenu(false) : setOpenMenu(true);
}

function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="header-content">
      <div className="header-title">
        <SearchBar />
      </div>
      <div className="header-back">
        <div className="header-icon">
          <button
            onClick={ () => renderTopMenu(openMenu, setOpenMenu) }
            type="button"
          >
            <BsJustify className="style-icon" />
          </button>
        </div>
        {openMenu === true ? ElementsMenu() : null}
      </div>
    </header>
  );
}

export default Menu;
