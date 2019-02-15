import React from 'react';
import Page from '../components/Page';
import { Link } from 'gatsby';

export default () => (
  <Page>
    <div>
      <h1>Contact me</h1>
      <ul className="ul__general">
        <li>My email is abbhart.work@gmail.com</li>
        <li>
          <Link
            className="link__general"
            to="www.linkedin.com/in/CS-abbey-hart"
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link className="link__general" to="https://twitter.com/abbeyhrt">
            Twitter
          </Link>
        </li>
        <li>
          <Link
            className="link__general"
            to="https://www.facebook.com/abbey.hart.9"
          >
            Facebook
          </Link>
        </li>
      </ul>
    </div>
  </Page>
);
