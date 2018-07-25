import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Classes from './Left.css';

import Header from './Header/Header';
import Home from './Home/Home';
import GithubLogin from './GithubLogin/GithubLogin';

const Left = props => (
  <div className={Classes.Left}>
    <Header user={props.user} />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={GithubLogin} />
      <Route
        path="/logout"
        render={() => {
          props.logoutHandler();
          return <Redirect to="/" />;
        }}
      />
    </Switch>
  </div>
);

export default Left;
