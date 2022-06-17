import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Rockets from './components/Rockets';
import Missions from './components/Missions/Missions';
import Profile from './components/Profile';
import { fetchRockets } from './Redux/rockets/rocketsReducer';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <Routes>
      <Route exact path="/" element={<Rockets />} />
      <Route path="Missions" element={<Missions />} />
      <Route path="Profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
