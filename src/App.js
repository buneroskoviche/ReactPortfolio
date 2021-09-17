import React from 'react';
import { Toolbar } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Toolbar />
      <About />
    </React.Fragment>
  );
}

export default App;
