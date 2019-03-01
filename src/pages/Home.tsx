import * as React from 'react';
import { match } from 'react-router-dom';
import Layout from 'components/Layout';
import Home from 'components/Home';

interface Props {
  match: match;
  children: React.ReactNode;
};

const HomePage: React.FC<Props> = (props: Props) => (
  <Layout>
    <Home {...props} />
  </Layout>
);

export default HomePage;
