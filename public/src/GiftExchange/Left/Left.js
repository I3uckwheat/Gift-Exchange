import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Classes from './Left.css';

import Header from './Header/Header';
import Home from './Home/Home';
import GithubLogin from './GithubLogin/GithubLogin';

const Left = () => (
  <div className={Classes.Left}>
    <Header />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={GithubLogin} />
    </Switch>
  </div>
);

export default Left;
