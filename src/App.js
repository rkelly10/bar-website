import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './services/routes'; 


export default class App extends React.Component {
  render() {
    return (
      <Router>
      <Routes />
    </Router>
    );
  }
}
