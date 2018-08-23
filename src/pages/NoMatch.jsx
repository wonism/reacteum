/** @jsx createElement */
/** @flow */
import { createElement } from 'react';
import { Provider } from 'react-redux';
import store from '~/store';
import Layout from '~/containers/Layout';
import NoMatch from '~/components/NoMatch';

const NoMatchPage = (props: {}) => (
  <Provider store={store}>
    <Layout {...props}>
      <NoMatch {...props} />
    </Layout>
  </Provider>
);

export default NoMatchPage;
