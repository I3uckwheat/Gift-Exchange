import React, { Fragment } from 'react';

import NavButton from './NavButton/NavButton';

import classes from './Navigation.css';

const Navigation = props => {
  let buttons = (
    <Fragment>
      <NavButton linkto='/login' name='Log In' />
      <NavButton linkto='/register' name='Register' />
    </Fragment>
  );

  if (props.user.loggedIn) {
    buttons = (
      <Fragment>
        <NavButton linkto='/account' name='Account' />
        <NavButton linkto='/logout' name='Log Out' />
      </Fragment>
    );
  }

  return (
    <nav className={classes.Navigation}>
      {buttons}
    </nav>
  );
};

export default Navigation;