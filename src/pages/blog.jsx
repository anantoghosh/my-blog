import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header, PostList, TagsBlock } from 'components';
import { Layout } from 'layouts';

const Blog = ({ data }) => {
  const { edges, totalCount } = data.allMarkdownRemark;
  const tags = [];
  data.tagsGroup.group.forEach(tag => {
    tags.push(tag.fieldValue);
  });

  return (
    <Layout>
      <Helmet title={'Blog'} />
      <Header title="All articles">{totalCount} posts</Header>
      <TagsBlock list={tags} />
      <PostList posts={edges} />
    </Layout>
  );
};

export default Blog;

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
    tagsGroup: PropTypes.shape({
      group: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            title
            path
            tags
            description
            date(formatString: "DD-MMM-YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    tagsGroup: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`;
