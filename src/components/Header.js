import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './assets/spacex.png';

const Header = () => (
  <header className="d-flex">
    <div className="d-flex logo-title">
      <img className="logo" src={logo} alt="spacex logo" />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <nav className="d-flex nav-links">
      <NavLink to="/Rockets">Rockets</NavLink>
      <NavLink to="/Missions">Missions</NavLink>
      <div className="line" />
      <NavLink to="/MyProfile">My Profile</NavLink>
    </nav>
  </header>
);

export default Header;
