import { addMessage, updateMessageValue } from '../../redux/dialogsPageReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
  }
}

const DialogsContainer = connect(mapStateToProps, {addMessage, updateMessageValue})(Dialogs);

export default DialogsContainer;