import { addMessage } from '../../redux/dialogsPageReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
  }
}

export default connect(mapStateToProps, { addMessage })(Dialogs);

