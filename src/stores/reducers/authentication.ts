import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAuthState {
  token: string;
  refreshToken: string;
}

export const initialState: IAuthState = {
  token: '',
  refreshToken: '',
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<IAuthState>) => {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    },
    logout: (state) => {
      state.refreshToken = initialState.refreshToken;
      state.token = initialState.token;
    },
  },
});

export const authenticationReducer = authenticationSlice.reducer;
export const authenticationAction = authenticationSlice.actions;
