import React from 'react';
import PropTypes from 'prop-types';

import { PostCard } from 'components';

import styles from './PostList.module.scss';

const PostList = ({ posts }) => (
  <div className={styles.postWrapper}>
    {posts.map(({ node }) => (
      <PostCard
        key={node.id}
        cover={node.frontmatter.cover.childImageSharp.fluid}
        path={node.frontmatter.path}
        title={node.frontmatter.title}
        date={node.frontmatter.date}
        excerpt={node.frontmatter.description}
        tags={node.frontmatter.tags}
      />
    ))}
  </div>
);

export default PostList;

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
};
