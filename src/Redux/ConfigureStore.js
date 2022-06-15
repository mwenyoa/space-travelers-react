import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionReducer from './missions/missionReducer';
import rocketReducer from './rockets/rocketsReducer';

const rootReducer = combineReducers({
  missionReducer,
  rocketReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;
