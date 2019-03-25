import GitHubIcon from '@carbon/icons-react/es/logo--github/24';
import LinkedInIcon from '@carbon/icons-react/es/logo--linkedin/24';
import TwitterIcon from '@carbon/icons-react/es/logo--twitter/24';
import EmailIcon from '@carbon/icons-react/es/email/24';
import { Link } from 'gatsby';
import React from 'react';
import ExternalLink from '../components/ExternalLink';

export default function AboutMe() {
  return (
    <aside className="AboutMe">
      <h1 className="AboutMe__name">Abbey Hart</h1>
      <p className="AboutMe__bio">
        I'm a web developer living in Austin, TX. I am currently a student at
        ACC pursuing an AS in Computer Science.
      </p>
      <nav aria-label="Site links" className="AboutMe__nav">
        <ul className="AboutMe__links">
          <li className="AboutMe__link">
            <Link to="/about">About</Link>
          </li>
          <li className="AboutMe__link">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="AboutMe__link">
            <Link to="/writing">Writing</Link>
          </li>
        </ul>
      </nav>
      <ul className="AboutMe__social-links">
        <li>
          <ExternalLink
            className="AboutMe__social-link"
            href="https://twitter.com/abbeyhrt"
            title="Find me on Twitter"
          >
            <TwitterIcon />
          </ExternalLink>
        </li>
        <li>
          <ExternalLink
            className="AboutMe__social-link"
            href="https://www.linkedin.com/in/CS-abbey-hart"
            title="Find me on LinkedIn"
          >
            <LinkedInIcon />
          </ExternalLink>
        </li>
        <li>
          <ExternalLink
            className="AboutMe__social-link"
            href="https://github.com/abbeyhrt"
            title="Find me on GitHub"
          >
            <GitHubIcon />
          </ExternalLink>
        </li>
        <li>
          <a
            className="AboutMe__social-link"
            href="mailto:abbhart.work@gmail.com"
            title="Email me"
          >
            <EmailIcon />
          </a>
        </li>
      </ul>
    </aside>
  );
}
