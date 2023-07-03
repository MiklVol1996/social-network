import { actions, DialogsPageInitialValueType } from '../../redux/dialogsPageReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/store';

const mapStateToProps = (state: AppStateType): MapStateType => {
  return {
    state: state.dialogsPage,
  }
}

const addMessage = actions.addMessage;

export default connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, { addMessage })(Dialogs);

type MapStateType = {
  state: DialogsPageInitialValueType,
}

type MapDispatchType = {
  addMessage: (message: string) => void,
}

