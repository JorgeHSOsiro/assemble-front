import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Buttons(title, link) {
  return (
    <div className="buttons-content">
      <Link to={ link } onClick={ async () => { if (title === 'Sair') await localStorage.clear(); } }>
        <button className="style-buttons" type="button">
          <p>{`${title}`}</p>
        </button>
      </Link>
    </div>
  );
}

export default Buttons;
