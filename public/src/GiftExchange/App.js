import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import LandingPage from './containers/LandingPage/LandingPage';

const App = () => (
  <BrowserRouter>
  <Layout>
    <Switch>
      <Route exact path='/' component={ LandingPage }/>
      <Route path='/about' render={() => (<h1>AboutRoute</h1>)}/>
      <Route path='/login' render={() => (<h1>loginRoute</h1>)}/>
      <Route path='/register' render={() => (<h1>registerRoute</h1>)}/>
      <Route path='/logout' render={() => (<h1>logoutRoute</h1>)}/>
      <Route render={() => (<h1>404 Route</h1>)}/>
    </Switch>
  </Layout>
  </BrowserRouter>
);

export default App;
