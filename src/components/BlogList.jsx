import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { TagsBlock } from 'components';
import { Container } from 'layouts';

import styles from './BlogList.module.scss';

const BlogList = ({ path, cover, title, date, excerpt, tags }) => (
  <Container>
    <article className={styles.wrapper}>
      <div className={styles.image}>
        <Link to={path} title={title}>
          <Img fluid={cover} />
        </Link>
      </div>
      <div className={styles.information}>
        <div className={styles.date}>{date}</div>
        <Link to={path}>
          <h1 className={styles.title}>{title}</h1>
        </Link>
        <TagsBlock list={tags} />
        {excerpt}
      </div>
    </article>
  </Container>
);

export default BlogList;

BlogList.propTypes = {
  cover: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};
