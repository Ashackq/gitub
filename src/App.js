import React from 'react';
import { Team ,Navbar} from './components';
import {A,H,E,F} from './page'
import { Route,Routes, BrowserRouter } from 'react-router-dom';

import './App.css';

const App = () => (
  
      <>
        
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<H/>} />
          <Route path="/About" element={<A/>} />
          <Route path="/Event" element={<E/>} />
          <Route path="/Teams" element={<Team/>} />
          <Route path="/Con" element={<Team/>} />
          <Route path="/Fut" element={<F/>} />
        </Routes>
    </BrowserRouter>
    </>
  
);

export default App;
