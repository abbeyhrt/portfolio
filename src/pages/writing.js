import React from 'react';
import Page from '../components/Page';
import { Link } from 'gatsby';
import AboutMe from '../components/AboutMe';
import Main from '../components/Main';

export default ({ data }) => {
  return (
    <Page className="Home">
      <AboutMe />
      <Main className="Articles">
        {data.writing.edges.length > 0 && (
          <section className="ArticleList">
            <header className="ArticleList__header">
              <h2 className="ArticleList__header-title">Writing</h2>
            </header>
            <ul className="ArticleList__articles">
              {data.writing.edges.map(({ node }) => (
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
};

export const query = graphql`
  {
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
