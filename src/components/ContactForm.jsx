import React from 'react';

import styles from './ContactForm.module.scss';

const ContactForm = () => {
  return (
    <div className={styles.formContainer}>
      <form
        className={styles.form}
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="fullname"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            name="name"
            required
            aria-label="Name"
            placeholder="Name"
          />
        </div>
        <div className={styles.hide}>
          <label htmlFor="fullname">Do not fill this</label>
          <input type="text" name="fullname" id="fullname" />
        </div>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="email"
            name="email"
            required
            aria-label="Email"
            placeholder="Email"
          />
        </div>
        <div className={styles.inputContainer}>
          <textarea
            className={styles.input}
            name="message"
            rows={3}
            required
            aria-label="Message"
            placeholder="Message"
          />
        </div>
        <div className={styles.actions}>
          <input
            type="submit"
            value="Send Message"
            className={styles.submit}
            aria-label="Submit Form"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
