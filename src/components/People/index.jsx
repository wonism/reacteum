import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Detail from '~/containers/People/Detail';
import List from './List';

const People = ({
  match,
}) => (
  <div>
    <Route exact path={match.url} render={() => <h1>Select People</h1>} />
    <Route path={`${match.url}/:id`} component={Detail} />
    {match.isExact ? <List match={match} /> : null}
  </div>
);

People.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
    isExact: PropTypes.bool.isRequired,
  }).isRequired,
};

export default People;
