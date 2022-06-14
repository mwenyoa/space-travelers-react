import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './assets/spacex.png';

const Header = () => (
  <header>
    <div className="logo">
      <img src={logo} alt="spacex logo" />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <nav>
      <NavLink to="/Rockets">Rockets</NavLink>
      <NavLink to="/Missions">Missions</NavLink>
      <NavLink to="/MyProfile">My Profile</NavLink>
    </nav>
  </header>

);

export default Header;
