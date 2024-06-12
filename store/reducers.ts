import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const userPersistConfig = {
  key: 'user',
  storage: storage,
  whitelist: ['userState'],
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
});

export default rootReducer;
