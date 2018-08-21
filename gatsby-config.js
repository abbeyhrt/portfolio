'use strict';

module.exports = {
  pathPrefix: '/portfolio',
  siteMetadata: {
    title: 'Abbey Hart',
    description: 'The portfolio of Abbey Hart',
    siteUrl: 'https://abbeyhrt.github.io/portfolio',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
