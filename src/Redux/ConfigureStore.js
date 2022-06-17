import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionReducer from './missions/missionReducer';
import rockets from './rockets/rocketsReducer';

const rootReducer = combineReducers({
  missionReducer,
  rockets,
});

const store = configureStore({ reducer: rootReducer });
export default store;
