import React from 'react';
import Layout from '~/components/Layout';
import Home from '~/components/Home';

const HomePage = props => (
  <Layout>
    <Home {...props} />
  </Layout>
);

export default HomePage;
