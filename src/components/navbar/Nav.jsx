import React from 'react';
import classes from './nav.module.css';
import { NavLink } from 'react-router-dom';

let Nav = () => {

  function getClassName({isActive}){
    return isActive? classes.active : classes.usual;
  }

  return (
    <nav>
      <div className={classes['nav-item']}>
          <NavLink to='/profile' className={getClassName}>
            <div>Profile</div>
            <div className={classes.inner}></div>
           </NavLink>
      </div>
      <div className={classes['nav-item']}>
          <NavLink to='/dialogs' className={getClassName}>
            <div>Messages</div>
            <div className={classes.inner}></div>
           </NavLink>
      </div>
      <div className={classes['nav-item']}>
          <NavLink to='/music' className={getClassName}>
            <div>Music</div>
            <div className={classes.inner}></div>
           </NavLink>
      </div>
      <div className={classes['nav-item']}>
          <NavLink to='/news' className={getClassName}>
            <div>News</div>
            <div className={classes.inner}></div>
           </NavLink>
      </div>
      <div className={classes['nav-item']}>
          <NavLink to='/settings' className={getClassName}>
            <div>Settings</div>
            <div className={classes.inner}></div>
           </NavLink>
      </div>
    </nav>
  )
}
export default Nav;