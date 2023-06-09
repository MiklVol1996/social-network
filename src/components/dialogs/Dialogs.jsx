import React from 'react';
import classes from './dialogs.module.css';
import Dialog from './dialog/Dialog.jsx';
import Message from './message/Message';
import Button from '../button/Button';

const Dialogs = ({ state, addMessage, updateMessageValue }) => {

  let dialogs = state.dialogs.map(dialog => <Dialog id={dialog.id} name={dialog.name} />)
  let messages = state.messages.map(message => <Message id={message.id} message={message.message} />)

  function onUpdateMessageText(e) {
    let text = e.target.value;
    updateMessageValue(text);
  }

  function onAddMessage() {
    addMessage();
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
            placeholder='Enter you message'></textarea>
        </div>
        <Button onClick={onAddMessage}>Send</Button>
      </div>
    </div>
  )
}

export default Dialogs;