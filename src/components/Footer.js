// import './Footer.css';
import React from 'react';
import ExternalLink from './ExternalLink';

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
        <ExternalLink
          className="Externallink__general"
          to="www.linkedin.com/in/CS-abbey-hart"
        >
          LinkedIn
        </ExternalLink>
      </li>
      <li className="footer__list-item">
        <ExternalLink
          className="link__general"
          to="https://twitter.com/abbeyhrt"
        >
          Twitter
        </ExternalLink>
      </li>
      <li className="footer__list-item">
        <ExternalLink
          className="link__general"
          to="https://www.facebook.com/abbey.hart.9"
        >
          Facebook
        </ExternalLink>
      </li>
    </ul>
  </footer>
);

export default Footer;
