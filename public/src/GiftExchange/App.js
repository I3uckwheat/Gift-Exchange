import React from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
  <div>
    <Route path='/' render={() => (<h1>ROOT ROUTE</h1>)}/>
    <Route path='/test' render={() => (<h1>THIS IS A ROUTE</h1>)}/>
    <Link to='/test'>TEST</Link>
  </div>
  </BrowserRouter>
);

export default App;
