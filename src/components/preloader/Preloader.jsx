import React from 'react';
import loading from '../../images/preloader.gif';
import classes from './preloader.module.css';

let Preloader = () => {
  return (
      <div className={classes.wrap}>
        <img src={loading}/>
      </div>
  )
}
export default Preloader;