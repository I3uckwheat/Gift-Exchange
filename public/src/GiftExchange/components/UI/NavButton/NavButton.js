import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './NavButton.css';

const NavButton = (props) => (
  <NavLink exact className={style.NavButton} activeClassName={style.active} to={props.to}>
    <div>
      <h2>{props.name}</h2>
    </div>
  </NavLink>
);

export default NavButton;
