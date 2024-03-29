import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App.js';

const Application = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(
  Application,
  document.getElementById('app')
);
