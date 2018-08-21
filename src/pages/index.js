import React from 'react';
import Page from '../components/Page';
import { Link, graphql } from 'gatsby';

export default ({ data }) => {
  return (
    <Page>
      <section>
        <header>
          <h2>About</h2>
        </header>
        <article>About...</article>
      </section>
      <section>
        <header>
          <h2>Projects</h2>
          <Link to={data.markdownRemark.fields.slug}>WTF_Bake</Link>
        </header>
      </section>
      <section>
        <header>
          <h2>Writing</h2>
        </header>
        <article>Writing...</article>
      </section>
    </Page>
  );
};

export const query = graphql`
  query {
    markdownRemark {
      fields {
        slug
      }
    }
  }
`;
