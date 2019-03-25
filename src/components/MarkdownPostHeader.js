import React from 'react';
import { Link } from 'gatsby';

export default function MarkdownPostHeader() {
  return (
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
}
