import React, { useEffect } from 'react';
import classes from './header.module.css';
import green from '../../images/02.png'
import blue from '../../images/03.png'
import red from '../../images/01.png'
import yellow from '../../images/04.png'
import purple from '../../images/05.png'
import { Route, Routes, useNavigate } from 'react-router-dom';
import starWars from '../../images/starWars.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/usersPageReducer';
import Button from '../common/button/Button';
import { giveLogin } from '../../redux/selectors';
import { logout } from '../../redux/authReducer';
import { Action } from 'redux';
import { stopCheckingNewMessages } from '../../redux/navBarReducer';
import { actions as dialogActions } from '../../redux/dialogsPageReducer';

const Header: React.FC = React.memo(() => {

  const location = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector(giveLogin);

  const onLogOut = () => {
    dispatch(actions.setFilter('', null));
    dispatch(actions.setCurrentPage(1));
    location('/profile');
    dispatch(logout() as unknown as Action);
  }

  useEffect(() => {
    return () => {
      dispatch(stopCheckingNewMessages() as unknown as Action);
      dispatch(dialogActions.setDialogs(null) as unknown as Action);
    }
  }, []);

  return (
    <header className={classes.header}>
      <div className={classes.label}>
        <img src={starWars} />
      </div>
      <div className={classes.sward}>

        <Routes>
          <Route path='/dialogs/*' element={<img src={red} />} />
          <Route path='/profile/*' element={<img src={green} />} />
          <Route path='/chat/*' element={<img src={blue} />} />
          <Route path='/news/*' element={<img src={purple} />} />
          <Route path='/users/*' element={<img src={yellow} />} />
          <Route path='/private/*' element={<img src={blue} />} />
        </Routes>

      </div>
      <div className={classes.loginOk}>
        <div>
          {login}
        </div>
        <div className={classes.logout} >
          <Button onClick={onLogOut}>Logout</Button>
        </div>
      </div>
    </header>
  )
})

export default Header;