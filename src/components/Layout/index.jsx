import React from 'react';
import PropTypes from 'prop-types';
import Main from '~/styled/Main';
import Gnb from '~/components/Gnb';
import Footer from '~/components/Footer';

const Layout = ({
  children,
}) => (
  <div>
    <Gnb />
    <Main>
      {children}
    </Main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
