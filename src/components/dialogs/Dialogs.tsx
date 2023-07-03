import React, { useMemo, useState } from 'react';
import classes from './dialogs.module.css';
import Dialog from './dialog/Dialog';
import Message from './message/Message';
import Button from '../common/button/Button';
import { DialogsPageInitialValueType } from '../../redux/dialogsPageReducer';

type Props = {
  state: DialogsPageInitialValueType,
  addMessage: (message: string) => void,
}

const Dialogs: React.FC<Props> = ({ state, addMessage }) => {

  let [textValue, setTextValue] = useState('');

  let dialogs = useMemo(() => {
    return state.dialogs.map((dialog, i) => <Dialog id={dialog.id} name={dialog.name} key={dialog.id}/>)
  }, [state.dialogs])

  let messages = useMemo(() => {
    return state.messages.map((message, i) => <Message message={message.message} key={message.id}/>)
  }, [state.messages])

  const onMessageSend = () => {
    addMessage(textValue);
    setTextValue('');
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
          <textarea value={textValue} onChange={(e) => setTextValue(e.target.value)}/>
          <Button onClick={onMessageSend}>Send</Button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;