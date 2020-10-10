import React, { Fragment } from 'react';

import classes from './Spinner.module.css';


const Spinner = () => {
  return (
    <Fragment>
      <div className={classes.Loader}>Loading...</div>
    </Fragment>
  );
}

export default Spinner;