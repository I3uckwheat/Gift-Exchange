import React from 'react';

import style from './Header.css';

import Nav from '../UI/Nav/Nav';

const Header = (props) => (
  <div className={style.Header}>
    <img src='http://res.publicdomainfiles.com/pdf_view/60/13539926412209.png'/>
    <h1>Gift Exchange</h1>
    <Nav />
  </div>
);

export default Header;
