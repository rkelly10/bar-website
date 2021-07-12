import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <div class="navigation">
      <ul class="navigation">
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Menu">Menu</Link></li>
        <li><Link to="/Reservations">Reservations</Link></li>
        <li><Link to="/Login">Login</Link></li>
     	</ul>
      <hr />
    </div>
  );
};

export default NavBar;