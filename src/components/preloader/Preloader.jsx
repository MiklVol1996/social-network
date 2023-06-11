import React from 'react';
import loading from '../../images/preloader.gif';
import classes from './preloader.module.css';

const Preloader = () => {
  return (
      <div className={classes.wrap}>
        <img src={loading}/>
      </div>
  )
}
export default Preloader;

