import React from 'react';
import { Provider } from 'react-redux';
import store from '~/store';
import Layout from '~/containers/Layout';
import People from '~/containers/People';

const PeoplePage = props => (
  <Provider store={store}>
    <Layout {...props}>
      <People {...props} />
    </Layout>
  </Provider>
);

export default PeoplePage;
