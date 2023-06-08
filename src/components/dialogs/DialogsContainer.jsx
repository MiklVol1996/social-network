import React from 'react';
import { addMessageAC, updateMessageValueAC } from '../../redux/dialogsPageReducer';
import Dialogs from './Dialogs';


const DialogsContainer = ({ store }) => {

  let state = store.getState().dialogsPage;

  function updateMessageText(text){
    store.dispatch(updateMessageValueAC(text));
  }

  function addMessage(){
    store.dispatch(addMessageAC());
  }

  return (
    <Dialogs state={state} addMessage={addMessage} updateMessageValue={updateMessageText}/>
  )
}
export default DialogsContainer;