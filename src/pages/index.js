import React from 'react';
import { graphql, Link } from 'gatsby';
import Page from '../components/Page';
import Main from '../components/Main';
import AboutMe from '../components/AboutMe';

export default function Home({ data }) {
  const { projects, writing } = data;
  return (
    <Page className="Home">
      <AboutMe />
      <Main className="Articles">
        {projects.edges.length > 0 && (
          <section className="ArticleList">
            <header className="ArticleList__header">
              <h2 className="ArticleList__header-title">Projects</h2>
            </header>
            <ul className="ArticleList__articles">
              {projects.edges.map(({ node }) => (
                <li key={node.fields.slug}>
                  <article className="Article">
                    <header className="Article__header">
                      <h3 className="Article__title">
                        <Link to={node.fields.slug}>
                          {node.frontmatter.title}
                        </Link>
                      </h3>
                      <small className="Article__date">
                        {node.frontmatter.date} - {node.timeToRead}min
                      </small>
                    </header>
                    <p className="Article__description">
                      {node.frontmatter.description}
                    </p>
                    <footer>
                      <Link
                        to={node.fields.slug}
                        className="Article__read-more"
                      >
                        Read more
                      </Link>
                    </footer>
                  </article>
                </li>
              ))}
            </ul>
          </section>
        )}
        {writing.edges.length > 0 && (
          <section className="ArticleList">
            <header className="ArticleList__header">
              <h2 className="ArticleList__header-title">Writing</h2>
            </header>
            <ul className="ArticleList__articles">
              {writing.edges.map(({ node }) => (
                <li key={node.fields.slug}>
                  <article className="Article">
                    <header className="Article__header">
                      <h3 className="Article__title">
                        <Link to={node.fields.slug}>
                          {node.frontmatter.title}
                        </Link>
                      </h3>
                      <small className="Article__date">
                        {node.fields.date} - {node.timeToRead}min
                      </small>
                    </header>
                    <p className="Article__description">
                      {node.frontmatter.description}
                    </p>
                    <footer>
                      <Link
                        to={node.fields.slug}
                        className="Article__read-more"
                      >
                        Read more
                      </Link>
                    </footer>
                  </article>
                </li>
              ))}
            </ul>
          </section>
        )}
      </Main>
    </Page>
  );
}

export const query = graphql`
  fragment PostData on MarkdownRemarkConnection {
    edges {
      node {
        frontmatter {
          title
          description
        }
        fields {
          slug
        }
        timeToRead
      }
    }
  }

  {
    projects: allMarkdownRemark(
      filter: { fields: { category: { eq: "projects" } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 5
    ) {
      ...PostData
      edges {
        node {
          frontmatter {
            date
          }
        }
      }
    }

    writing: allMarkdownRemark(
      filter: { fields: { category: { eq: "writing" } } }
      sort: { fields: [fields___date], order: DESC }
      limit: 5
    ) {
      ...PostData
      edges {
        node {
          fields {
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
