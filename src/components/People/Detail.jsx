import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Spinner from '~/styled/Spinner';
import List from './List';

export default class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    isRequested: PropTypes.bool.isRequired,
    people: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    getPeople: PropTypes.func.isRequired,
  };

  static defaultProps = {
    people: null,
  };

  componentDidMount() {
    this.props.getPeople(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.getPeople(this.props.match.params.id);
    }
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <Helmet>
          <title>Reacteum - People #{match.params.id}</title>
          <meta name="keyword" content="reacteum,react,redux,redux-saga,react-helmet,emotion" />
        </Helmet>
        <h1>People #{match.params.id}</h1>
        <List match={match} />
        {this.props.isRequested ? <Spinner /> : null}
        {!this.props.isRequested && this.props.people ? (
          <div>
            <br />
            {`Hello, I'm ${this.props.people.name}!`}
          </div>
        ) : null}
        {!this.props.isRequested && !this.props.people ? (
          <div>
            <br />
            There's no people
          </div>
        ) : null}
      </div>
    );
  }
}
