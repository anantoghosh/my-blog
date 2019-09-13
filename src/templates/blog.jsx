import React from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header, PostList } from 'components';
import { Layout } from 'layouts';

import styles from './blog.module.scss';

const Blog = ({ pageContext, data }) => {
  const { edges, totalCount } = data.allMarkdownRemark;
  const { tag } = pageContext;
  const tagHeader = `Tagged with "${tag}"`;
  const tagNumber = `${totalCount} post${totalCount === 1 ? '' : 's'}`;
  return (
    <Layout>
      <Helmet title={'Blog'} />
      <Header title={tagHeader}>{tagNumber}</Header>
      <div className={styles.button}>
        <Link to="/blog">↼ View All Articles</Link>
      </div>
      <PostList posts={edges} />
    </Layout>
  );
};

export default Blog;

Blog.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.any,
  }).isRequired,
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
  }),
};

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { eq: false } } }
    ) {
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
  }
`;
