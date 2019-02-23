import { connect } from 'react-redux';
import Layout from '~/components/Layout';
// selectors
import { getVersion } from '~/store/app/selectors';

const mapStateToProps = state => ({
  version: getVersion(state),
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
