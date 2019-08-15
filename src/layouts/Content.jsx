import React from 'react';
import PropTypes from 'prop-types';

import '../styles/prism.scss';
import styles from './Content.module.scss';

const Content = ({ input }) => (
  <div className={styles.wrapper} dangerouslySetInnerHTML={{ __html: input }} />
);

export default Content;

Content.propTypes = {
  input: PropTypes.any.isRequired,
};
