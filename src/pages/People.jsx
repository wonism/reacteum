/** @flow */
import React from 'react';
import { Provider } from 'react-redux';
import store from '~/store';
import Layout from '~/containers/Layout';
import People from '~/containers/People';
import type { Props } from '~/components/People';

const PeoplePage = (props: Props) => (
  <Provider store={store}>
    <Layout {...props}>
      <People {...props} />
    </Layout>
  </Provider>
);

export default PeoplePage;
