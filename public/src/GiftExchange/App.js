import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout/Layout';


class App extends Component {
  state = {
    user: {
      loggedIn: false
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Layout user={this.state.user}>

        </Layout>
      </BrowserRouter >
    )
  }
};

export default App;
