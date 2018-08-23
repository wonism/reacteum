/** @flow */
import { connect } from 'react-redux';
import Layout from '~/components/Layout';
// selectors
import { getVersion } from '~/store/app/selectors';
// types
import type { State as AppState } from '~/store/app/initialState';

const mapStateToProps = (state: { app: AppState }): { version: string } => ({
  version: getVersion(state),
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
