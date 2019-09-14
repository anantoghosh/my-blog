import React from 'react';
import PropTypes from 'prop-types';

import styles from './Container.module.scss';

const Container = ({ children, className, center }) => (
  <div
    className={`${className} ${styles.wrapper} ${center ? styles.center : ''}`}
  >
    {children}
  </div>
);

export default Container;

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  center: PropTypes.object,
};
