/** @flow */
import { connect } from 'react-redux';
import Detail from '~/components/People/Detail';
// actions
import { getPeople as getPeopleAction } from '~/store/app/actions';
// selectors
import { isRequested, getPeople } from '~/store/app/selectors';
// types
import type { State as AppState } from '~/store/app/initialState';
import type { PropsFromState } from '~/components/People/Detail';

const mapStateToProps = (state: { app: AppState }): PropsFromState => ({
  isRequested: isRequested(state),
  people: getPeople(state),
});
const mapDispatchToProps: { getPeople: Function } = {
  getPeople: getPeopleAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
