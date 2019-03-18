'use strict';

module.exports = {
  pathPrefix: '/portfolio',
  siteMetadata: {
    title: 'Abbey Hart',
    description: 'The portfolio of Abbey Hart',
    siteUrl: 'https://abbeyhrt.github.io/portfolio',
  },
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 260,
            },
          },
        ],
      },
    },
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
