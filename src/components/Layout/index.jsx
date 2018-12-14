/** @flow */
import React, { type Fragment, type Element } from 'react';
import Main from '~/styled/Main';
import Gnb from '~/components/Gnb';
import Footer from '~/components/Footer';

type Props = {
  children: Element<any> | null,
  version: string,
};

const Layout = ({ children, version }: Props): Fragment => (
  <>
    <Gnb />
    <Main>
      {children}
    </Main>
    <Footer version={version} />
  </>
);

export default Layout;
