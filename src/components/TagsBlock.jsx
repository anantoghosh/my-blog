import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import styles from './TagsBlock.module.scss';

const TagsBlock = ({ list }) => (
  <div className={styles.TagsBlock}>
    {list &&
      list.map(tag => {
        return (
          <Link key={tag} to={`/tags/${tag}`}>
            <span className={styles.text}>{tag}</span>
          </Link>
        );
      })}
  </div>
);

export default TagsBlock;

TagsBlock.propTypes = {
  list: PropTypes.array,
};
