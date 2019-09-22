import React, { useState } from 'react';
import { Link } from 'gatsby';
import Headroom from 'react-headroom';
import logo from '../../static/logo/logo.png';

import styles from './NavBar.module.scss';

const NavBar = () => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Headroom calcHeightOnResize disableInlineStyles>
        <Link to="/" className={styles.link}>
          <img src={logo} alt="Gatsby Logo" />
        </Link>
        <button
          className={`${styles.menu} ${isOpen ? styles.in : ''}`}
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
        <nav className={`${styles.nav} ${isOpen ? styles.hidden : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          {/* <Link to="/work">Work</Link> */}
          <Link to="/contact">Contact</Link>
        </nav>
      </Headroom>
      <nav className={`${styles.sidebar} ${isOpen ? styles.in : ''}`}>
        <button
          className={`${styles.close} ${isOpen ? styles.in : ''}`}
          onClick={() => setIsOpen(false)}
        >
          Close X
        </button>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        {/* <Link to="/work">Work</Link> */}
        <Link to="/contact">Contact</Link>
      </nav>
    </>
  );
};

export default NavBar;
