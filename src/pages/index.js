import React from 'react';
import Page from '../components/Page';
import { Link } from 'gatsby';

export default ({ data }) => {
  return (
    <Page>
      <section>
        <header>
          <h2>About</h2>
        </header>
        <article className="article__general">
          I'm a Web Developer, living and working in Austin, Tx.{' '}
        </article>
      </section>
      <section>
        <header>
          <h2>Projects</h2>
          <ul className="ul__general">
            <li className="li__general">
              <Link className="link__general" to={'/projects/wtf-bake'}>
                WTF_Bake
              </Link>
            </li>
            <li className="li__general">
              <Link className="link__general" to={'/projects/keep-up'}>
                Keep Up
              </Link>
            </li>
          </ul>
        </header>
      </section>
      {/* <section>
        <header>
          <h2>Writing</h2>
        </header>
        <article>Writing...</article>
      </section> */}
    </Page>
  );
};

// export const query = graphql`
//   query {
//     markdownRemark {
//       fields {
//         slug
//       }
//     }
//   }
// `;
