import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAppState {
  authLoaded: boolean;
}

const initialState: IAppState = {
  authLoaded: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAuthenticationLoaded: (state, action: PayloadAction<boolean>) => {
      state.authLoaded = action.payload;
    },
  },
});

export const appReducer = appSlice.reducer;
export const appAction = appSlice.actions;
