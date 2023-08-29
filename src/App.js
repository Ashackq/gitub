import React from 'react';
import { Navbar,Team} from './components';
import {A,H,E,F,C} from './page'
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
          <Route path="/Con" element={<C/>} />
          <Route path="/Fut" element={<F/>} />
          <Route path="/Event/:eventId"  />
        </Routes>
    </BrowserRouter>
    <footer/>
    </>
  
);

export default App;
