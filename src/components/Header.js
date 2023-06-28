import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './assets/spacex.png';

const Header = () => (
  <header>
    <div className="d-flex logo-title">
      <img className="logo" src={logo} alt="spacex logo" />
      <h1><b>Space Travelers&apos; Hub</b></h1>
    </div>
    <nav className="d-flex nav-links">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'styled-link' : 'no-styled-link')}>Rockets</NavLink>
      <NavLink to="/Missions" className={({ isActive }) => (isActive ? 'styled-link' : 'no-styled-link')}>Missions</NavLink>
      <div className="line" />
      <NavLink to="/Profile" className={({ isActive }) => (isActive ? 'styled-link' : 'no-styled-link')}>My Profile</NavLink>
    </nav>
  </header>
);

export default Header;
