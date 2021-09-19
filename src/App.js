import React from 'react';
import { Toolbar, Container, Divider } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Resume from './components/Resume';

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
        <Contact/>
        <Divider/>
        <Resume/>
      </Container>
    </React.Fragment>
  );
}

export default App;
