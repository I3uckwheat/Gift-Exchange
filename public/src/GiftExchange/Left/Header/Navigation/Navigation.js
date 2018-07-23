import React, { Fragment } from 'react';

import NavButton from './NavButton/NavButton';

import classes from './Navigation.css';

const Navigation = props => {
  let buttons = (
    <Fragment>
      <NavButton linkto='/register' name='Register' />
      <NavButton linkto='/login' name='Log In' />
    </Fragment>
  );

  if (false) {
    buttons = (
      <Fragment>
        <NavButton linkto='/account' name='Account' />
        <NavButton linkto='/logout' name='Log Out' />
      </Fragment>
    );
  }

  return (
    <nav className={classes.Navigation}>
      <NavButton linkto='/' name='Home' exact />
      {buttons}
    </nav>
  );
};

export default Navigation;