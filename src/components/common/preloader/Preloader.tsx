import React from 'react';
import loading from '../../../images/preloader.gif';
import classes from './preloader.module.css';

const Preloader: React.FC = () => {
  return (
      <div className={classes.wrap}>
        <img src={loading}/>
      </div>
  )
}

export default Preloader;

