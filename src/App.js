import React from 'react';
import { Toolbar, Container, Divider, Fab } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Resume from './components/Resume';
import ScrollTop from './components/ScrollTop';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Toolbar id='top-anchor' />
      <Container>
        <About />
        <Divider/>
        <Work/>
        <Divider/>
        <Contact/>
        <Divider/>
        <Resume/>
        <ScrollTop>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Container>
    </React.Fragment>
  );
}

export default App;
