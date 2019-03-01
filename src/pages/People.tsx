import * as React from 'react';
import { match } from 'react-router-dom';
import Layout from 'components/Layout';
import People from 'components/People';

interface Props {
  match: match;
  children: React.ReactNode;
};

const PeoplePage: React.FC<Props> = (props: Props) => (
  <Layout>
    <People {...props} />
  </Layout>
);

export default PeoplePage;
