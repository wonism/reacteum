import * as React from 'react';
import { Helmet } from 'react-helmet';

const Home: React.FC = () => (
  <>
    <Helmet>
      <title>Reacteum - Home</title>
      <meta name="keyword" content="reacteum,react,react-helmet,styled-components" />
    </Helmet>
    <h1>Home</h1>
  </>
);

export default Home;
