/** @flow */
import React, { type Element } from 'react';
import Anchor from '~/styled/Anchor';
import StyledFooter from '~/styled/Footer';

const Footer = ({ version }: { version: string }): Element<'footer'> => (
  <StyledFooter>
    &copy;
    &nbsp;
    <Anchor href="https://github.com/wonism/reacteum" target="_blank">
      wonism
    </Anchor>
    &nbsp;
    <small>
      Version: {version}
    </small>
  </StyledFooter>
);

export default Footer;
