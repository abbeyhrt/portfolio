import React from 'react';
import Page from '../components/Page';

export default () => (
  <Page>
    <div>
      <h1>Contact me</h1>
      <ul className="ul__general">
        <li className="li__general">
          <address>
            <a className="link__general" href="mailto:abbhart.work@gmail.com">
              Email
            </a>
          </address>
        </li>
        <li className="li__general">
          <a
            className="link__general"
            href="https://www.linkedin.com/in/CS-abbey-hart"
          >
            LinkedIn
          </a>
        </li>
        <li className="li__general">
          <a className="link__general" href="https://twitter.com/abbeyhrt">
            Twitter
          </a>
        </li>
        <li className="li__general">
          <a
            className="link__general"
            href="https://www.facebook.com/abbey.hart.9"
          >
            Facebook
          </a>
        </li>
      </ul>
    </div>
  </Page>
);
