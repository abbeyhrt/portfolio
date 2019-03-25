import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

const SITE_META_QUERY = graphql`
  query GetSiteMetadata {
    site {
      siteMetadata {
        title
        description
        siteUrl
        social {
          twitter
        }
      }
    }
  }
`;

function Meta({ description, title }) {
  return (
    <StaticQuery
      query={SITE_META_QUERY}
      render={data => {
        const { siteMetadata } = data.site;
        const meta = [
          {
            name: 'description',
            content: description || siteMetadata.description,
          },
          {
            property: 'og:url',
            content: siteMetadata.siteUrl,
          },
          {
            property: 'og:title',
            content: title || siteMetadata.title,
          },
          {
            property: 'og:description',
            content: description || siteMetadata.description,
          },
          {
            name: 'twitter:card',
            content: 'summary',
          },
          {
            name: 'twitter:creator',
            content: siteMetadata.social.twitter,
          },
          {
            name: 'twitter:title',
            content: title || siteMetadata.title,
          },
          {
            name: 'twitter:description',
            content: description || siteMetadata.description,
          },
        ];
        return (
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            title={title || siteMetadata.title}
            meta={meta}
          />
        );
      }}
    />
  );
}

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Meta;
