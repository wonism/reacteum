import React from 'react';
import { Provider } from 'react-redux';
import store from '~/store';
import Layout from '~/containers/Layout';
import Home from '~/containers/Home';

const HomePage = props => (
  <Provider store={store}>
    <Layout {...props}>
      <Home {...props} />
    </Layout>
  </Provider>
);

export default HomePage;
