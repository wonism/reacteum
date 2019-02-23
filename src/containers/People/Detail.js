import { connect } from 'react-redux';
import Detail from '~/components/People/Detail';
// actions
import { getPeople as getPeopleAction } from '~/store/app/actions';
// selectors
import { isRequested, getPeople } from '~/store/app/selectors';

const mapStateToProps = state => ({
  isRequested: isRequested(state),
  people: getPeople(state),
});
const mapDispatchToProps = {
  getPeople: getPeopleAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
