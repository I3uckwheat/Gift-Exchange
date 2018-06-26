import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import LandingPage from './containers/LandingPage/LandingPage';
import Modal from './components/UI/Modal/Modal';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Route exact path='/' component={ LandingPage }/>
      <Route path='/register' render={() => (<Modal type='register' />) }/>
      <Route path='/login' render={() => (<Modal type='login' />)}/>
      <Route path='/about' render={() => (<h1>AboutRoute</h1>)}/>
      <Route path='/logout' render={() => (<h1>logoutRoute</h1>)}/>
    </Layout>
  </BrowserRouter>
);

export default App;
