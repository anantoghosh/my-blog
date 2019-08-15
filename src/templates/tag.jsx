import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Layout, Container } from 'layouts';
import { Header } from 'components';
import config from '../../config/site';

import styles from './tag.module.scss';

const Tag = ({ pageContext }) => {
  const { posts, tagName } = pageContext;

  return (
    <Layout>
      <Helmet title={`${tagName} | ${config.siteTitle}`} />
      <Header title={tagName}>
        <Link to="/tags" className={styles.link}>
          All Tags
        </Link>
      </Header>
      <Container>
        <div className={styles.information}>
          {posts.map((post, index) => (
            <Link key={index} to={post.frontmatter.path}>
              <h3>{post.frontmatter.title}</h3>
            </Link>
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default Tag;

Tag.propTypes = {
  pageContext: PropTypes.shape({
    posts: PropTypes.array,
    tagName: PropTypes.string,
  }),
};
