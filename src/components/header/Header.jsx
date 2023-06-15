import React from 'react';
import classes from './header.module.css';
import green from '../../images/02.png'
import blue from '../../images/03.png'
import red from '../../images/01.png'
import yellow from '../../images/04.png'
import purple from '../../images/05.png'
import { NavLink, Route, Routes } from 'react-router-dom';
import starWars from '../../images/starWars.jpg';

const Header = ({ isAuth, login, logout }) => {
  return (
    <header className={classes.header}>
      <div className={classes.label}>
        <img src={starWars} />
      </div>
      <div className={classes.sward}>

        <Routes>
          <Route path='/dialogs/*' element={<img src={red} />} />
          <Route path='/profile/*' element={<img src={green} />} />
          <Route path='/music/*' element={<img src={blue} />} />
          <Route path='/news/*' element={<img src={purple} />} />
          <Route path='/users/*' element={<img src={yellow} />} />
        </Routes>

      </div>
      {
        isAuth
          ? <div className={classes.loginOk}>
            <div>
              {login}
            </div>
            <div className={classes.logout} onClick={logout}>
              Logout
            </div>
          </div>
          : <NavLink className={classes.login} to='/login'>
            <span>Login</span>
          </NavLink>
      }
    </header>
  )
}

export default Header;