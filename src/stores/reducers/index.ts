import { combineReducers } from '@reduxjs/toolkit';

import { appReducer } from './app';
import { authenticationReducer } from './authentication';
import { profileReducer } from './profile';

export const rootReducer = combineReducers({
  app: appReducer,
  authentication: authenticationReducer,
  profile: profileReducer,
});
