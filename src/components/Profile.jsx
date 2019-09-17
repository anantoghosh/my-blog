import React from 'react';

import styles from './Profile.module.scss';
import logo from '../../static/logo/logo.png';

import twitter from '../../static/twitter.svg';
import github from '../../static/github.svg';
import devto from '../../static/devto.svg';
import medium from '../../static/medium.svg';
import rss from '../../static/rss.svg';
import { Link } from 'gatsby';

const Profile = () => {
  return (
    <section className={styles.Profile}>
      <div className={styles.info}>
        <img src={logo} alt="" className={styles.image} />
        <div className={styles.text}>
          <header className={styles.name}>Ananto Ghosh</header>
          <p className={styles.description}>
            Everyday Coder. If you like what you read, follow me on twitter or
            subscribe to the rss feed,{' '}
            <span className={styles.thanks}>please and thank you.</span>
            <br />
            {/* <Link to="/work" className={styles.link}>My work.</Link>{' '} */}
            <Link to="/contact" className={styles.link}>
              Contact me.
            </Link>
          </p>
        </div>
        <div className={styles.social}>
          <a
            href="http://twitter.com/anantoghosh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="twitter logo" className={styles.icon} />
          </a>
          <a
            href="http://github.com/anantoghosh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github logo" className={styles.icon} />
          </a>
          <a href="https://dev.to/anantoghosh" target="_blank" rel="noopener noreferrer">
            <img src={devto} alt="dev.to logo" className={styles.icon} />
          </a>
          <a href="https://medium.com/@gho" target="_blank" rel="noopener noreferrer">
            <img src={medium} alt="medium logo" className={styles.icon} />
          </a>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            <img src={rss} alt="rss logo" className={styles.icon} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
