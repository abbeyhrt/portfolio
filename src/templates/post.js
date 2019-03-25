import { graphql } from 'gatsby';
import React from 'react';
import Main from '../components/Main';
import Meta from '../components/Meta';
import MarkdownPostHeader from '../components/MarkdownPostHeader';
import MarkdownPostDetails from '../components/MarkdownPostDetails';

export default function Post({ data }) {
  const { html, fields, frontmatter, timeToRead } = data.markdownRemark;
  return (
    <div className="MarkdownPost">
      <Meta title={frontmatter.title} />
      <MarkdownPostHeader />
      <Main>
        <article className="Container">
          <MarkdownPostDetails
            title={frontmatter.title}
            date={fields.date}
            timeToRead={timeToRead}
          />
          <div
            className="MarkdownPost__content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </Main>
    </div>
  );
}

export const pageQuery = graphql`
  query TemplateBlogMarkdown($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date
      }
      fields {
        date(formatString: "MMMM DD, YYYY")
      }
      timeToRead
    }
  }
`;
