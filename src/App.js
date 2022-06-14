import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Rockets />} />
      <Route path="/Missions" element={<Missions />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
