import * as React from 'react';
import Gnb from 'components/Layout/Gnb';
import Footer from 'components/Layout/Footer';
import Main from 'styled/Main';

interface Props {
  children: React.ReactNode;
};

const Layout: React.FC = ({ children }: Props) => (
  <>
    <Gnb />
    <Main>
      {children}
    </Main>
    <Footer />
  </>
);

export default Layout;
