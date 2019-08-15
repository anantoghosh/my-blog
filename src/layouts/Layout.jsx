import React from 'react';
import PropTypes from 'prop-types';
import 'typeface-open-sans';
import 'typeface-candal';
import { SEO } from 'components';
import { NavBar, Footer } from 'layouts';

import './global.scss';

const Layout = ({ children }) => (
  <>
    <SEO />
    <NavBar />
    {children}
    <Footer />
  </>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};
