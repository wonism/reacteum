import React from 'react';
import Layout from '~/components/Layout';
import NoMatch from '~/components/NoMatch';

const NoMatchPage = props => (
  <Layout>
    <NoMatch {...props} />
  </Layout>
);

export default NoMatchPage;
