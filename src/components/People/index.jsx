import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';
import Detail from '~/containers/People/Detail';
import List from './List';

const People = ({ match }) => (
  <>
    <Route exact path={match.url} render={() => <h1>Select People</h1>} />
    <Route path={`${match.url}/:id`} component={Detail} />
    {match.isExact ? (
      <div>
        <Helmet>
          <title>Reacteum - Select People</title>
          <meta name="keyword" content="reacteum,react,redux,redux-saga,react-helmet,emotion" />
        </Helmet>
        <List match={match} />
      </div>
    ) : null}
  </>
);

People.propTypes = {
  match: PropTypes.shape({
    url: string.isRequired,
    isExact: bool.isRequired,
  }).isRequired,
};

export default People;
