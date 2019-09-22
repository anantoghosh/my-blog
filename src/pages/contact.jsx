import React from 'react';
import Helmet from 'react-helmet';
import { Header, ContactForm } from 'components';
import { Layout, Container } from 'layouts';

const Contact = () => {
  return (
    <Layout>
      <Helmet title={'Home'} />
      <Header title="Contact"></Header>
      <Container>
        <ContactForm />
      </Container>
    </Layout>
  );
};

export default Contact;

Contact.propTypes = {};
