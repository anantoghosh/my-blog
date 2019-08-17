import React from 'react';

import styles from './Profile.module.scss';
import logo from '../../static/logo/logo.png';

import twitter from '../../static/twitter.svg';
import github from '../../static/github.svg';
import rss from '../../static/rss.svg';

const Profile = () => {
  return (
    <section className={styles.Profile}>
      <div className={styles.info}>
        <img src={logo} alt="" className={styles.image} />
        <div className={styles.text}>
          <header className={styles.name}>Ananto Ghosh</header>
          <p className={styles.description}>
            Everyday Coder. If you like what you read, follow me on twitter or
            subscribe to the rss feed.
            <br />
            <div className={styles.thanks}>Please and thank you.</div>
          </p>
        </div>
        <div className={styles.social}>
          <a
            href="http://twitter.com/anantoghosh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="" className={styles.icon} />
          </a>
          <a
            href="http://github.com/anantoghosh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="" className={styles.icon} />
          </a>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            <img src={rss} alt="" className={styles.icon} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
