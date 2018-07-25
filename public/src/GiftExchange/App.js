import React, { Component, Fragment } from 'react';

import Classes from './App.css';

import Left from './Left/Left';
import Right from './Right/Right';

class App extends Component {
  state = {
    user: {
      loggedIn: false
    }
  };

  componentDidMount() {
    fetch('/api/auth/status', { credentials: 'same-origin' })
      .then(res => res.json())
      .then(result => {
        this.setState({ user: { loggedIn: true } });
      });
  }

  render() {
    return (
      <div className={Classes.App}>
        <Left />
        <Right />
      </div>
    );
  }
}

export default App;
