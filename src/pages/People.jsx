import React from 'react';
import Layout from '~/components/Layout';
import People from '~/components/People';

const PeoplePage = props => (
  <Layout>
    <People {...props} />
  </Layout>
);

export default PeoplePage;
