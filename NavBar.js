import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css'

const NavBar = () => {
  
  return (
    <div className="navbar">
      <h1 className="Title">Shero Project</h1>
      <ul>
        <li className="link"><Link to="/Home">Home</Link></li>
        <li className="link"><Link to="/About">About</Link></li>
        <li className="link"><Link to="/Sources">Sources</Link></li>
     	</ul>
      <hr />
    </div>
  );
};

export default NavBar;