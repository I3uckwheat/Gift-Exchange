import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Classes from './Left.css';

import Header from './Header/Header';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';

const Left = () => (
  <div className={Classes.Left}>
    <Header />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  </div>
);

export default Left;
