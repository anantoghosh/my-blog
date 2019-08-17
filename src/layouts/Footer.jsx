import React from 'react';

import Profile from '../components/Profile';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.wrapper}>
    <div className={styles.profile}>
      <Profile />
    </div>
  </footer>
);
export default Footer;
