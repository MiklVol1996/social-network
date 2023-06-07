import React from 'react';
import classes from './dialogs.module.css';
import Dialog from './dialog/Dialog.jsx';
import Message from './message/Message';
import { addMessageAC, updateMessageValueAC } from '../../redux/dialogsPageReducer';


const Dialogs = ({ state, dispatch }) => {

  let dialogs = state.dialogs.map(dialog => <Dialog id={dialog.id} name={dialog.name} />)
  let messages = state.messages.map(message => <Message id={message.id} message={message.message} />)

  let textArM = React.createRef();

  function onUpdateMessageText(){
    let text = textArM.current.value;
    dispatch(updateMessageValueAC(text));
  }

  function addMessage(){
    dispatch(addMessageAC());
  }

  return (
    <div className={classes.main_wrap}>
      <div className={classes.dialogs_wrap}>
        {dialogs}
      </div>
      <div className={classes.messages_wrap}>
        <div>
          {messages}
        </div>
        <div>
          <textarea value={state.newMessageValue} onChange={onUpdateMessageText}
          placeholder='Enter you message' ref={textArM}></textarea>
        </div>
        <div>
          <button onClick={addMessage}>Send message</button>
        </div>

      </div>
    </div>
  )
}
export default Dialogs;