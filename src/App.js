import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainComp from './comps/mainComp';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (

    <Router>
      <MainComp />
    </Router>

  );
}

export default App;
