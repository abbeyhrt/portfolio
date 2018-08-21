import React from 'react';
import { graphql } from 'gatsby';
import Page from '../components/Page';

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Page>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Page>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
