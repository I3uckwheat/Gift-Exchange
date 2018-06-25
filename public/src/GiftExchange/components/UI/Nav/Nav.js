import React, { Fragment } from 'react';

import style from './Nav.css';

import NavButton from '../NavButton/NavButton';

const Nav = (props) => {
  function isSignedIn() {
    // Login Check: Query server or receive props
    if (false) {
      return <NavButton to='/logout' name='Log Out'/>;
    }
    return (
      <Fragment>
        <NavButton to='/login' name='Log In' />
        <NavButton to='/register' name='Register'/>
      </Fragment>
    );
  }

  return(
    <div className={style.Nav}>
      <NavButton to='/' name='Home' />
      <NavButton to='/about' name='About' />
      { isSignedIn() }
    </div>
  );
 };

export default Nav;
