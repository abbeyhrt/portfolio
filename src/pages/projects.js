import React from 'react';
import Page from '../components/Page';
import { Link } from 'gatsby';

export default () => {
  return (
    <Page>
      <h1>Projects</h1>
      <span>This is what I've done:</span>
      <ul className="ul__general">
        <li className="li__general">
          <Link className="link__general" to="/projects/wtf-bake">
            WTF Bake
          </Link>
        </li>
      </ul>

      <span>This is what I'm doing:</span>
      <ul className="ul__general">
        <li className="li__general">
          <Link className="link__general" to="/projects/keep-up">
            Keep Up
          </Link>
        </li>
      </ul>
    </Page>
  );
};

// export const query = graphql`
//   {
//     allMarkdownRemark {
//       edges {
//         node {
//           fields {
//             slug
//           }

//           frontmatter {
//             title
//             description
//           }
//         }
//       }
//     }
//   }
// `;
// export default ({ data }) => {
//   const { edges: projects } = data.allMarkdownRemark;

//   return (
//     <Page>
//       <h1>Projects</h1>
//       <ul>
//         This is what I've done:
//         {projects.map(({ node }) => (
//           <li>
//             <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </Page>
//   );
// };
