import { graphql, Link } from 'gatsby';
import React from 'react';
import Container from '../components/Container';
import Main from '../components/Main';
import Meta from '../components/Meta';
import MarkdownPostHeader from '../components/MarkdownPostHeader';
import MarkdownPostDetails from '../components/MarkdownPostDetails';

export default function Project({ data }) {
  const { html, frontmatter, timeToRead } = data.markdownRemark;
  return (
    <div className="MarkdownPost">
      <Meta title={frontmatter.title} />
      <MarkdownPostHeader />
      <Main>
        <article className="Container">
          <MarkdownPostDetails
            title={frontmatter.title}
            date={frontmatter.date}
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
  query TemplateProjectMarkdown($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date
      }
      timeToRead
    }
  }
`;
