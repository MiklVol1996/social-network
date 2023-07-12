import React, { useEffect } from 'react';
import classes from './nav.module.css';
import { Navigate, NavLink } from 'react-router-dom';
import { giveNewMessagesCount } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Action } from 'redux';
import { startCheckingNewMessages } from '../../redux/navBarReducer';


const Nav: React.FC = React.memo(() => {

  const newMessagesCount = useSelector(giveNewMessagesCount);
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(startCheckingNewMessages() as unknown as Action);
  }, []);

  return (
    <nav className={classes.wrap}>
      {navBarItemCreater('profile', 'Green', 'Profile', 'innerGreen')}
      {navBarItemCreater('dialogs', 'Red', 'Dialogs', 'innerRed', newMessagesCount)}
      {navBarItemCreater('chat', 'Blue', 'Chat', 'innerBlue',)}
      {navBarItemCreater('news', 'Purple', 'News', 'innerPurple')}
      {navBarItemCreater('users', 'Yellow', 'Users', 'innerYellow')}
    </nav>
  )
})

export default Nav;

function getClassName(str: string) {
  let className = 'active' + str;
  return function ({ isActive }: { isActive: boolean }) {
    return isActive ? classes[className] : classes.usual;
  }
}

function navBarItemCreater(path: string, color: string, title: string, className: string, rest?: number) {
  const newPath = '/' + path;
  return (
    <div className={classes['nav-item']}>
      <NavLink to={newPath} className={getClassName(color)}>
        <div>
          <span className={classes.title} onClick={() => <Navigate to='/dialogs'/>}>{title}</span>
          <span className={rest ? classes['visible'] : classes['nonVisible']}>{rest}</span>
        </div>
        <div className={classes[className]}></div>
      </NavLink>
    </div>
  )
}








