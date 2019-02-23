import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// dumb components
import List from '~/components/People/List';
import Spinner from '~/styled/Spinner';

export default class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    getPeople: PropTypes.func.isRequired,
    people: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    isRequested: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const { getPeople, match } = this.props;
    getPeople(match.params.id);
  }

  componentDidUpdate(prevProps) {
    const { match, getPeople } = this.props;

    if (match.params.id !== prevProps.match.params.id) {
      getPeople(match.params.id);
    }
  }

  render() {
    const { match, isRequested, people } = this.props;

    return (
      <>
        <Helmet>
          <title>
            Reacteum - People #
            {match.params.id}
          </title>
          <meta name="keyword" content="reacteum,react,redux,redux-saga,react-helmet,emotion" />
        </Helmet>
        <h1>
          People #
          {match.params.id}
        </h1>
        <List match={match} />
        {isRequested ? <Spinner /> : null}
        {!isRequested && people ? (
          <div>
            <br />
            {`Hello, I'm ${people.name}!`}
          </div>
        ) : null}
        {!isRequested && !people ? (
          <div>
            <br />
            There's no people
          </div>
        ) : null}
      </>
    );
  }
}
