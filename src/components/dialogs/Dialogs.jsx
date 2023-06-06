import React from 'react';
import classes from './dialogs.module.css';
import Dialog from './dialog/Dialog.jsx';
import Message from './message/Message';


const Dialogs = ({state}) => {

  let dialogs = state.dialogs.map(dialog => <Dialog id={dialog.id} name={dialog.name}/>)
  let messages = state.messages.map(message => <Message id={message.id} message={message.message}/>)

  return (
    <div className={classes.main_wrap}>
      <div className={classes.dialogs_wrap}>
       {dialogs}
      </div>
      <div className={classes.messages_wrap}>
       {messages}
      </div>
    </div>
  )
}
export default Dialogs;