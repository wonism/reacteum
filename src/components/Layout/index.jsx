/** @jsx createElement */
/** @flow */
import { createElement, Fragment, type Fragment as FragmentType, type Element } from 'react';
import Main from '~/styled/Main';
import Gnb from '~/components/Gnb';
import Footer from '~/components/Footer';

type Props = {
  children: Element<any> | null,
  version: string,
};

const Layout = ({ children, version }: Props): FragmentType => (
  <Fragment>
    <Gnb />
    <Main>
      {children}
    </Main>
    <Footer version={version} />
  </Fragment>
);

export default Layout;
