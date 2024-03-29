const path = require('path');

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes, createFieldExtension } = actions;

  createFieldExtension({
    name: 'defaultFalse',
    extend() {
      return {
        resolve(source, args, context, info) {
          if (source[info.fieldName] == null) {
            return false;
          }
          return source[info.fieldName];
        },
      };
    },
  });

  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      draft: Boolean @defaultFalse
    }
  `);
};

exports.createPages = ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('src/templates/post.jsx');
    const blogTemplate = path.resolve('src/templates/blog.jsx');
    const tagPage = path.resolve('src/templates/tags.jsx');

    resolve(
      graphql(`
        {
          postsRemark: allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___date] }
          ) {
            edges {
              node {
                frontmatter {
                  draft
                  path
                  title
                  tags
                  description
                }
              }
            }
          }
          tagsGroup: allMarkdownRemark(
            filter: { frontmatter: { draft: { eq: false } } }
            limit: 2000
          ) {
            group(field: frontmatter___tags) {
              fieldValue
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reporter.panicOnBuild('Error while running GraphQL query.');
          return reject(result.errors);
        }

        const posts = result.data.postsRemark.edges;

        const postsByTag = {};
        // create tags page
        posts.forEach(({ node }) => {
          if (node.frontmatter.tags) {
            node.frontmatter.tags.forEach(tag => {
              if (!postsByTag[tag]) {
                postsByTag[tag] = [];
              }

              postsByTag[tag].push(node);
            });
          }
        });

        const tags1 = Object.keys(postsByTag);

        createPage({
          path: '/tags',
          component: tagPage,
          context: {
            tags: tags1.sort(),
          },
        });

        //create posts
        posts.forEach(({ node }, index) => {
          const path = node.frontmatter.path;
          let prev = null;
          let next = null;

          console.log(node, index);

          if (index !== 0 && posts[index - 1].node.frontmatter.draft !== true) {
            prev = posts[index - 1].node;
          }

          if (
            index !== posts.length - 1 &&
            posts[index + 1].node.frontmatter.draft !== true
          ) {
            next = posts[index + 1].node;
          }

          createPage({
            path,
            component: postTemplate,
            context: {
              pathSlug: path,
              prev,
              next,
            },
          });
        });

        //create tags
        // tags.forEach(tagName => {
        //   const posts = postsByTag[tagName];

        //   createPage({
        //     path: `/blog/${tagName}`,
        //     component: blogTemplate,
        //     context: {
        //       tagName,
        //     },
        //   });
        // });

        const tags = result.data.tagsGroup.group;
        // Make tag pages
        tags.forEach(tag => {
          createPage({
            path: `/tags/${tag.fieldValue}/`,
            component: blogTemplate,
            context: {
              tag: tag.fieldValue,
            },
          });
        });
      })
    );
  });
};

/* Allows named imports */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
