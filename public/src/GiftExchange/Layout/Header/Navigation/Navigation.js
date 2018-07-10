import React from 'react';

import NavButton from './NavButton/NavButton';

import classes from './Navigation.css';

const Navigation = props => {
  return (
    <nav className={classes.Navigation}>
      <NavButton linkto='/login' name='Log In' />
      <NavButton linkto='/register' name='Register' />
    </nav>
  );
};

export default Navigation;