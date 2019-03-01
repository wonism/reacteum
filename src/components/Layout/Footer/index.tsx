import * as React from 'react';
import Anchor from 'styled/Anchor';
import StyledFooter from 'styled/Footer';

const Footer: React.FC = () => (
  <StyledFooter>
    &copy;
    &nbsp;
    <Anchor href="https://github.com/wonism/reacteum" target="_blank">
      wonism
    </Anchor>
  </StyledFooter>
);

export default Footer;