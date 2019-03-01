import * as React from 'react';
import { match } from 'react-router-dom';
import Layout from 'components/Layout';
import NoMatch from 'components/NoMatch';

interface Props {
  match: match;
  children: React.ReactNode;
};

const NoMatchPage: React.FC<Props> = (props: Props) => (
  <Layout>
    <NoMatch {...props} />
  </Layout>
);

export default NoMatchPage;
