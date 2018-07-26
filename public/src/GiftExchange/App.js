import React, { Component, Fragment } from 'react';

import Classes from './App.css';

import Left from './Left/Left';
import Right from './Right/Right';

class App extends Component {
  state = {
    user: {
      isLoggedIn: false
    }
  };

  logoutHandler() {
    fetch('/api/logout', { credentials: 'same-origin' }).then(() => {
      this.setState({ user: { isLoggedIn: false } });
    });
  }

  componentDidMount() {
    fetch('/api/auth/status', { credentials: 'same-origin' })
      .then(res => res.json())
      .then(result => {
        if (result.user) return this.setState({ user: { isLoggedIn: true } });
      });
  }

  render() {
    return (
      <div className={Classes.App}>
        <Left user={this.state.user} logoutHandler={(history) => this.logoutHandler(history)} />
        <Right user={this.state.user} />
      </div>
    );
  }
}

export default App;
