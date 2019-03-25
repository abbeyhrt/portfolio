'use strict';

const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

// Parse date information out of blog post filename.
const BLOG_POST_FILENAME_REGEX = /([0-9]+)\-([0-9]+)\-([0-9]+)\-(.+)\.md$/;

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type !== 'MarkdownRemark') {
    return;
  }

  const { createNodeField } = actions;
  const { relativePath } = getNode(node.parent);
  const category = relativePath.split('/')[0];

  createNodeField({
    node,
    name: 'category',
    value: category,
  });

  let slug = createFilePath({ node, getNode });

  if (category === 'writing') {
    // Blog posts don't have embedded permalinks.
    // Their slugs follow a pattern: /writing/<slug>
    // The date portion comes from the file name: <date>-<title>.md
    const match = BLOG_POST_FILENAME_REGEX.exec(relativePath);
    const year = match[1];
    const month = match[2];
    const day = match[3];
    const filename = match[4];

    slug = `/writing/${filename}`;

    const date = new Date(year, month - 1, day);

    // Blog posts are sorted by date and display the date in their header.
    createNodeField({
      node,
      name: 'date',
      value: date.toJSON(),
    });
  }

  createNodeField({
    node,
    name: 'slug',
    value: slug,
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  const projectTemplate = path.resolve(__dirname, './src/templates/project.js');
  const postTemplate = path.resolve(__dirname, './src/templates/post.js');

  // Redirect /index.html to root.
  createRedirect({
    fromPath: '/index.html',
    redirectInBrowser: true,
    toPath: '/',
  });

  const allMarkdown = await graphql(
    `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors);

    throw Error(allMarkdown.errors);
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(edge => {
    const { slug } = edge.node.fields;

    if (slug.includes('projects/')) {
      createPage({
        path: slug,
        component: projectTemplate,
        context: {
          slug,
        },
      });
    } else if (slug.includes('writing/')) {
      createPage({
        path: slug,
        component: postTemplate,
        context: {
          slug,
        },
      });
    }
  });
};
