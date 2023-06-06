import React from 'react';
import classes from './header.module.css';
import sward from '../../images/sward.jpeg'

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.label}>
        <img src='https://i.pinimg.com/originals/2d/bc/81/2dbc81740c7d99796e6edaaea9aef889.png' />
      </div>
      <div className={classes.sward}>
        <img src={sward} />
      </div>
    </header>
  )
}

export default Header;