// import './Header.css';

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
  <header className="MarkdownPostHeader">
    <Link className="MarkdownPostHeader__title" to="/">
      Abbey Hart
    </Link>
    <nav className="MarkdownPostHeader__nav">
      <ul className="MarkdownPostHeader__links">
        <li>
          <Link className="MarkdownPostHeader__link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="MarkdownPostHeader__link" to="/writing">
            Writing
          </Link>
        </li>
        <li>
          <Link className="MarkdownPostHeader__link" to="/projects">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
