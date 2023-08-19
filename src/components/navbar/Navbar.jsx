import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../ass/logo.jpg';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links_logo">
        <Link to="/">
          <img src={2} alt='loo' />
        </Link>
      </div>
      <div className="navbar-links">
        <div className="navbar-links_container">
          <p><Link to="/About">About</Link></p>
          <p><Link to="/Event">Event</Link></p>
          <p><Link to="/Teams">Teams</Link></p>
          <p><Link to="/Con">Lets Connect</Link></p>
           {/* <p><Link to="/Fut">Future Plans</Link></p> */}
        </div>
      </div>
      <div className="navbar-links_logo">
        <img src={2} alt='mitloo' />
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <p><Link to="/About">About</Link></p>
              <p><Link to="/Event">Event</Link></p>
              <p><Link to="/Teams">Teams</Link></p>
              <p><Link to="/Con">Lets Connect</Link></p>
              <p><Link to="/Fut">Future Plans</Link></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
