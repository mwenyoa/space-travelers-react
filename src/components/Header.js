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
      <NavLink to="/Rockets" className={({ isActive }) => (isActive ? 'styled-link' : 'no-styled-link')}>Rockets</NavLink>
      <NavLink to="/Missions" className={({ isActive }) => (isActive ? 'styled-link' : 'no-styled-link')}>Missions</NavLink>
      <div className="line" />
      <NavLink to="/MyProfile" className={({ isActive }) => (isActive ? 'styled-link' : 'no-styled-link')}>My Profile</NavLink>
    </nav>
  </header>
);

export default Header;
