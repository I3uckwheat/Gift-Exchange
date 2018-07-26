import React, { Fragment } from 'react';

import Navigation from './Navigation/Navigation';

import classes from './Header.css';


const Header = props => (
  <div className={classes.Header}>
    <div>
      <h1>Gift Exchange!</h1>
    </div>
    <Navigation user={props.user} />
  </div>
);

export default Header;