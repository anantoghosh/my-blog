import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import styles from './PostList.module.scss';

const PostList = ({ cover, path, date, title, excerpt, tags }) => (
  <article className={styles.wrapper}>
    <div className={styles.image}>
      <Img fluid={cover} />
    </div>
    <Link to={path} className={styles.link}>
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <span>{date}</span>
        <p className={styles.excerpt}>{excerpt}</p>
        <div className={styles.tags}>
          {tags.map(tag => {
            return (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </Link>
  </article>
);

export default PostList;

PostList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  cover: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
