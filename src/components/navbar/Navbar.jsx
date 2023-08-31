import React, { useState } from 'react';
import logo from '../../ass/logo.jpg';
import logo1 from '../../ass/logo1.jpg';
import './navbar.css';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";

import { SidebarData } from "./sidebar";


const Navbar = () => {
   const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);


  return (
    <div className="navbarx">
      <div className="navbar-links_logo navbar-brand">
        <Link to="/">
        
          
        
          <img src={logo} alt='loo' />
      
        </Link>
      </div>
          <div className="navbar-links">
            <div className="navbar-links_container">
              <p><Link to="/About">About</Link></p>
              <p><Link to="/Event">Events</Link></p>
              <p><Link to="/Teams">Teams</Link></p>
              <p><Link to="/Con">Let's Connect</Link></p>
              <p><Link to="/Fut">Future Plans</Link></p>
            </div>
          </div>

      <div className="navbar-links_logo1">
        <img src={logo1} alt='mitloo' />
      </div>

      
      <div className="navbar-menu">
        

        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                
              </Link>
            </li>
            
            {SidebarData.map((item, index) => {
              return (
                
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            
          </ul>
        </nav>
      

        
      </div>
    </div>
  );
};


export default Navbar;