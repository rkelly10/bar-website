import React from 'react';

import ReactDOM from 'react-dom';
import App from './app.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './services/routes'; // where we are going to specify our routes

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('root')
);
