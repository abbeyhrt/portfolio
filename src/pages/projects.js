import React from 'react';
import Page from '../components/Page';
import { Link, graphql } from 'gatsby';

export default ({ data }) => (
  <Page>
    <h1>Projects</h1>
    <ul>
      This is what I've done:
      <li>
        <Link to={data.markdownRemark.fields.slug}>WTF_Bake</Link>
      </li>
      <li>Project</li>
      <li>Project</li>
    </ul>
  </Page>
);

export const query = graphql`
  query {
    markdownRemark {
      fields {
        slug
      }
    }
  }
`;
