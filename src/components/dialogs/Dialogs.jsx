import React from 'react';
import classes from './dialogs.module.css';
import { NavLink } from 'react-router-dom';

let Dialogs = () => {

  function getClassName({isActive}){
    return isActive? classes.active : classes.dialog;
  }

  return (
    <div className={classes.main_wrap}>
      <div className={classes.dialogs_wrap}>
        <div className={classes.dialog}>
          <NavLink to='/dialogs/1' className={getClassName}>Obi Wan Kenobi</NavLink> 
        </div>
        <div className={classes.dialog}>
        <NavLink to='/dialogs/2' className={getClassName}>Magister Yoda</NavLink> 
        </div>
        <div className={classes.dialog}>
        <NavLink to='/dialogs/3' className={getClassName}>Han Solo</NavLink> 
        </div>
      </div>
      <div className={classes.messages_wrap}>
        <div className={classes.message}>
          Where is Kwaigon??
        </div>
        <div className={classes.message}>
          May the Force be with you!
        </div>
        <div className={classes.message}>
          I'm going to Tatuin, i neeed some money
        </div>
      </div>
    </div>
  )
}
export default Dialogs;