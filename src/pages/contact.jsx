import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Header, PostCard, ContactForm } from 'components';
import { Layout, Container } from 'layouts';

import styles from './index.module.scss';

const Index = () => {
  return (
    <Layout>
      <Helmet title={'Home'} />
      <Header title="Contact">Articles about simple tech</Header>
      <Container>
        <ContactForm />
      </Container>
    </Layout>
  );
};

export default Index;

Index.propTypes = {};
