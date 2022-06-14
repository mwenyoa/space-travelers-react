import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionReducer from './missions/missionReducer';

const reducer = combineReducers({
  missionReducer,
});

const store = configureStore({ reducer });

export default store;
