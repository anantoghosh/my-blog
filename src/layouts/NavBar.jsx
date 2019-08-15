import React from 'react';
import { Link } from 'gatsby';
import Headroom from 'react-headroom';
import logo from '../../static/logo/logo.png';

import styles from './NavBar.module.scss';

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <Link to="/" className={styles.link}>
      <img src={logo} alt="Gatsby Logo" />
    </Link>
    <nav className={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
    </nav>
  </Headroom>
);

export default NavBar;
