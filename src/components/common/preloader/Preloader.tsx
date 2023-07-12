import React from 'react';
import loading from '../../../images/preloader.gif';
import classes from './preloader.module.css';

const Preloader: React.FC = React.memo(() => {
  return (
      <div className={classes.wrap}>
        <img src={loading}/>
      </div>
  )
})

export default Preloader;

