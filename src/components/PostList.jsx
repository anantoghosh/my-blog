import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import styles from './PostList.module.scss';

const PostList = ({ cover, path, date, title, excerpt }) => (
  <article className={styles.wrapper}>
    <div className={styles.image}>
      <Img fluid={cover} />
    </div>
    <Link to={path} className={styles.link}>
      <div className={styles.info}>
        <span>{date}</span>
        <h2 className={styles.title}>{title}</h2>
        <span>{excerpt}</span>
      </div>
    </Link>
  </article>
);

export default PostList;

PostList.propTypes = {
  cover: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
