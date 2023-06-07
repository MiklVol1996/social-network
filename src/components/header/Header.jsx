import React from 'react';
import classes from './header.module.css';

import green from '../../images/02.png'
import blue from '../../images/03.png'
import red from '../../images/01.png'
import yellow from '../../images/04.png'
import purple from '../../images/05.png'
import { Route, Routes } from 'react-router-dom';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.label}>
        <img src='https://i.pinimg.com/originals/2d/bc/81/2dbc81740c7d99796e6edaaea9aef889.png' />
      </div>
      <div className={classes.sward}>

        <Routes>
         
          <Route path='/dialogs/*' element={<img src={red}/>}/>
          <Route path='/profile' element={<img src={green}/>}/>
          <Route path='/music' element={<img src={blue}/>}/>
          <Route path='/news' element={<img src={purple}/>}/>
          <Route path='/settings' element={<img src={yellow}/>}/>
        </Routes>
       
      </div>
    </header>
  )
}

export default Header;