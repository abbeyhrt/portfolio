import './Header.css';

import React from 'react';
import { Link } from 'gatsby';

// BEM
// B- Block
// E- Element
// M - Modifier
// .<block>__<element>--<modifier>
// .btn
// .btn__icon
// .btn__icon--small

const Header = () => (
  <header className="header">
    <div className="header__name">
      <Link to="/">Abbey Hart</Link>
    </div>
    <nav className="header__nav">
      <ul className="header__list">
        <li className="header__list-item">
          <Link to="/about">About</Link>
        </li>
        <li className="header__list-item">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="header__list-item">
          <Link to="/writing">Writing</Link>
        </li>
        <li className="header__list-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
