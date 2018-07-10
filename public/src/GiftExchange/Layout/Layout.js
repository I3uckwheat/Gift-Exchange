import React, { Fragment } from 'react';

import Header from './Header/Header';

const Layout = props => (
  <Fragment>
    <Header user={props.user}/>
    {props.children}
  </Fragment>
);

export default Layout;