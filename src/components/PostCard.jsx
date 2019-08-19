import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import styles from './PostCard.module.scss';

const PostCard = ({
  cover,
  path,
  date,
  title,
  excerpt,
  tags,
  className = '',
}) => (
  <article className={`${styles.wrapper} ${className}`}>
    <Link to={path} className={styles.link}>
      <div className={styles.imageContainer}>
        <Img fluid={cover} className={styles.image} fadeIn />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.info}>
        <span className={styles.date}>{date}</span>
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

export default PostCard;

PostCard.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  cover: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};
