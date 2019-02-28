import React from 'react';
import PropTypes from 'prop-types';
import Gnb from '~/components/Layout/Gnb';
import Footer from '~/components/Layout/Footer';
import Main from '~/styled/Main';

const Layout = ({ children }) => (
  <>
    <Gnb />
    <Main>
      {children}
    </Main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.element,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
