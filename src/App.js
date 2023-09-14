import React,{useState} from "react";
import { Navbar,Team,D} from './components';
import {A,H,E,F,C,Lth,Congo} from './page'
import { Route,Routes, BrowserRouter } from 'react-router-dom';

import './App.css';

const App = () =>{ 
  const [loggedIn, setLoggedIn] = useState(false);
 

  const handleLogin = () => {
    setLoggedIn(true);
    window.localStorage.setItem("loggedIn", "true");
  
  };
  return(
      <>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="*" element={<H/>} />
          <Route path="/About" element={<A/>} />
          <Route path="/Event" element={<E/>} />
          <Route path="/Teams" element={<Team/>} />
          <Route path="/Con" element={<C/>} />
          <Route path="/Fut" element={<F/>} />
          <Route path="/Fut" element={<D/>} />
          <Route exact path="/login" element={<Lth handleLogin={handleLogin}/>} />
          <Route path="/congo" element={loggedIn ? <Congo /> : <Lth handleLogin={handleLogin} />} />
          <Route path="/:eventId" element={<Lth handleLogin={handleLogin}/>} />
        </Routes>
    </BrowserRouter>
    <footer/>
    </>
  
);
  }

export default App;
