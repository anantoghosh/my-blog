import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import styles from './Header.module.scss';

const Header = ({ children, title, date, cover }) => (
  <header className={styles.wrapper}>
    {cover && (
      <div className={styles.imageContainer}>
        <Img fluid={cover} className={styles.image} />
      </div>
    )}
    <div className={styles.text}>
      <h1>{title}</h1>
      <h3>{date}</h3>

      {children && <p className={styles.subTitle}>{children}</p>}
    </div>
  </header>
);

export default Header;

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

Header.defaultProps = {
  children: false,
  cover: false,
  date: false,
  title: false,
};
