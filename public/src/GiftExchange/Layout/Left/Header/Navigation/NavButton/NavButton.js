import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavButton.css';

const NavButton = props => (
  <NavLink to={props.linkto} activeClassName={classes.selected} className={classes.NavButton} exact={props.exact} >
    <div>
      <p>{props.name}</p>
    </div>
  </NavLink>
);

export default NavButton;