import React from 'react';
import { Toolbar, Container, Divider } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Work from './components/Work';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Toolbar />
      <Container>
        <About />
        <Divider/>
        <Work/>
        <Divider/>
      </Container>
    </React.Fragment>
  );
}

export default App;
