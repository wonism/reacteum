/** @jsx createElement */
/** @flow */
import { createElement, Fragment, Component, type Fragment as FragmentType } from 'react';
import { Helmet } from 'react-helmet';
// dumb components
import List from '~/components/People/List';
import Spinner from '~/styled/Spinner';
// types
import type { People } from '~/store/app/initialState';

type MatchProp = { +params: { +id: string } };
type GetPeopleProp = (input: string) => Function;
type Props = {
  +match: MatchProp,
  +getPeople: GetPeopleProp,
  +isRequested: boolean,
  +people: People,
};
type PropsNotFromState = {
  +match: MatchProp,
  +getPeople: GetPeopleProp,
};
export type PropsFromState = $Diff<Props, PropsNotFromState>;

export default class Detail extends Component<Props> {
  componentDidMount(): void {
    this.props.getPeople(this.props.match.params.id);
  }

  componentDidUpdate(prevProps: Props): void {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.getPeople(this.props.match.params.id);
    }
  }

  render(): FragmentType {
    const { match, isRequested, people }: Props = this.props;

    return (
      <Fragment>
        <Helmet>
          <title>Reacteum - People #{match.params.id}</title>
          <meta name="keyword" content="reacteum,react,redux,redux-saga,react-helmet,emotion" />
        </Helmet>
        <h1>People #{match.params.id}</h1>
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
      </Fragment>
    );
  }
}
