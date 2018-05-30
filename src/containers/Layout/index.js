import { connect } from 'react-redux';
import Layout from '~/components/Layout';
// selectors
import * as appSelectors from '~/store/app/selectors';

export default connect(
  state => ({
    version: appSelectors.getVersion(state),
  }), {
  }
)(Layout);
