import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = () => (
  <Layout>
    <Helmet title={'About'} />
    <Header title="About">mein.in Ananto Ghosh&#39;s blog</Header>
    <Container>
      <h3>Todo</h3>
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
