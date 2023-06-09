import React from 'react';
import classes from './nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {

  function getClassName(str){
    let className = 'active' + str;
    return function ({isActive}){
      
      return isActive? classes[className] : classes.usual;
    }
  }

  return (
    <nav>
      <div className={classes['nav-item']}>
          <NavLink to='/profile' className={getClassName('Green')}>
            <div>Profile</div>
            <div className={classes.innerGreen}></div>
           </NavLink>
      </div>
      <div className={classes['nav-item']}>
          <NavLink to='/dialogs' className={getClassName('Red')}>
            <div>Messages</div>
            <div className={classes.innerRed}></div>
           </NavLink>
      </div>
      <div className={classes['nav-item']}>
          <NavLink to='/music' className={getClassName('Blue')}>
            <div>Music</div>
            <div className={classes.innerBlue}></div>
           </NavLink>
      </div>
      <div className={classes['nav-item']}>
          <NavLink to='/news' className={getClassName('Purple')}>
            <div>News</div>
            <div className={classes.innerPurple}></div>
           </NavLink>
      </div>
      <div className={classes['nav-item']}>
          <NavLink to='/users' className={getClassName('Yellow')}>
            <div>Users</div>
            <div className={classes.innerYellow}></div>
           </NavLink>
      </div>
    </nav>
  )
}
export default Nav;