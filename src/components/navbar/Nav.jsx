import React from 'react';
import classes from './nav.module.css';

let Nav = () => {
  return (
    <nav className={classes.nav}>
    <div className={classes['nav-wrap']}>
      <div className={classes['nav-item']}>
        <a>Profile</a>
      </div>
      <div className={classes['nav-item']}>
        <a>Messages</a>
      </div>
      <div className={classes['nav-item']}>
        <a>News</a>
      </div>
      <div className={classes['nav-item']}>
        <a>Music</a>
      </div>
      <div className={[classes['nav-item'], classes['nav-item-set']].join(' ')}>
        <a>Settings</a>
      </div>
    </div>

  </nav>
  )
}
export default Nav;