import React, { Component, Fragment } from 'react';
import {  Switch, Route } from 'react-router-dom';

import Classes from "./App.css";

import Left from './Layout/Left/Left';
import Right from './Layout/Right/Right';


class App extends Component {
  state = {
    user: {
      loggedIn: false
    }
  }

  render() {
    return (
      <div className={Classes.App}>
        <Left />
        <Right />
      </div>
    )
  }
};

export default App;
