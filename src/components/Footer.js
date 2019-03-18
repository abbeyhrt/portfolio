import './Footer.css';
import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (
  <footer>
    <div>
      Made with{' '}
      <span role="img" aria-label="Facepalm">
        🤦‍♀️
      </span>
    </div>
    <ul className="footer__list">
      <li className="footer__list-item">
        <a className="link__general" href="mailto:abbhart.work@gmail.com">
          Email
        </a>
      </li>
      <li className="footer__list-item">
        <Link className="link__general" to="www.linkedin.com/in/CS-abbey-hart">
          LinkedIn
        </Link>
      </li>
      <li className="footer__list-item">
        <Link className="link__general" to="https://twitter.com/abbeyhrt">
          Twitter
        </Link>
      </li>
      <li className="footer__list-item">
        <Link
          className="link__general"
          to="https://www.facebook.com/abbey.hart.9"
        >
          Facebook
        </Link>
      </li>
    </ul>
  </footer>
);

export default Footer;
