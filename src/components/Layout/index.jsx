import React from 'react';
import PropTypes from 'prop-types';
import Main from '~/styled/Main';
import Gnb from '~/components/Gnb';
import Footer from '~/components/Footer';

const Layout = ({ children, version }) => (
  <>
    <Gnb />
    <Main>
      {children}
    </Main>
    <Footer version={version} />
  </>
);

Layout.propTypes = {
  children: PropTypes.element,
  version: PropTypes.string.isRequired,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
