import { connect } from 'react-redux';
import Detail from '~/components/People/Detail';
// actions
import { getPeople } from '~/store/app/actions';
// selectors
import * as appSelectors from '~/store/app/selectors';

export default connect(
  state => ({
    isRequested: appSelectors.isRequested(state),
    people: appSelectors.getPeople(state),
  }), {
    getPeople,
  }
)(Detail);
