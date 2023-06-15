import React, { useMemo } from 'react';
import classes from './dialogs.module.css';
import Dialog from './dialog/Dialog.jsx';
import Message from './message/Message';
import AddMessageForm from './AddMessageForm';

const Dialogs = ({ state, addMessage }) => {

  let dialogs  = useMemo(() => {
    return state.dialogs.map((dialog, i) => <Dialog id={dialog.id} name={dialog.name} key={i}/>)
  }, [state.dialogs])

  let messages = useMemo(() => {
    return state.messages.map((message, i) => <Message id={message.id} message={message.message} key={i}/>)
  }, [state.messages])

  function onAddMessage(data) {
    addMessage(data.messageText);
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
        <AddMessageForm onSubmit={onAddMessage}/>
      </div>
    </div>
  )
}

export default Dialogs;