/** @flow */
import React, { type Fragment } from 'react';
import { Helmet } from 'react-helmet';

const Home = (): Fragment => (
  <>
    <Helmet>
      <title>Reacteum - Home</title>
      <meta name="keyword" content="reacteum,react,redux,redux-saga,react-helmet,emotion" />
    </Helmet>
    <h1>Home</h1>
  </>
);

export default Home;
