import React from 'react';
import { Team ,Navbar} from './components';
import {H} from './page'
import { Route,Routes, BrowserRouter } from 'react-router-dom';

import './App.css';

const App = () => (
  
      <>
        
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<H/>} />
          <Route path="/About" element={<Team/>} />
          <Route path="/Event" element={<Team/>} />
          <Route path="/Teams" element={<Team/>} />
          <Route path="/Con" element={<Team/>} />
        </Routes>
    </BrowserRouter>
    </>
  
);

export default App;
