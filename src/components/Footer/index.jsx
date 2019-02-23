import React from 'react';
import PropTypes from 'prop-types';
import Anchor from '~/styled/Anchor';
import StyledFooter from '~/styled/Footer';

const Footer = ({ version }) => (
  <StyledFooter>
    &copy;
    &nbsp;
    <Anchor href="https://github.com/wonism/reacteum" target="_blank">
      wonism
    </Anchor>
    &nbsp;
    <small>
      Version:&nbsp;
      {version}
    </small>
  </StyledFooter>
);

Footer.propTypes = {
  version: PropTypes.string.isRequired,
};

export default Footer;
