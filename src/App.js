import React from 'react';
import { Toolbar, Container, Divider, Fab } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Resume from './components/Resume';
import ScrollTop from './components/ScrollTop';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Project from './components/Project';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Toolbar id='top-anchor' />
      <Container>
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Home/>} />

            <Route path='/contact' element={<Contact/>} />

            <Route path='/about' element={<Home/>} />

            <Route path='/work' element={<Work/>} />

            <Route path='/projects/:projIndex' element={<Project/>} />

          </Routes>
        </BrowserRouter>
      </Container>
    </React.Fragment>
  );
}

export default App;
