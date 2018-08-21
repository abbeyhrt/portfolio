import './Footer.css';
import React from 'react';

const Footer = () => (
  <footer>
    <div>
      Made with{' '}
      <span role="img" aria-label="Facepalm">
        🤦‍♀️
      </span>
    </div>
    <ul className="footer__list">
      <li className="footer__list-item">Email</li>
      <li className="footer__list-item">GitHub</li>
      <li className="footer__list-item">LinkedIn</li>
      <li className="footer__list-item">Medium</li>
    </ul>
  </footer>
);

export default Footer;
