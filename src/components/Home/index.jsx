/** @jsx createElement */
/** @flow */
import { createElement, Fragment, type Fragment as FragmentType } from 'react';
import { Helmet } from 'react-helmet';

const Home = (): FragmentType => (
  <Fragment>
    <Helmet>
      <title>Reacteum - Home</title>
      <meta name="keyword" content="reacteum,react,redux,redux-saga,react-helmet,emotion" />
    </Helmet>
    <h1>Home</h1>
  </Fragment>
);

export default Home;
