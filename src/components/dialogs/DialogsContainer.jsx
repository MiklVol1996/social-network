import { addMessage } from '../../redux/dialogsPageReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import WithAuthRedirect from '../../hok/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
  }
}

export default compose(
  WithAuthRedirect,
  connect(mapStateToProps, { addMessage })
)(Dialogs);

