import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Role } from 'types/role';

export interface IProfileState {
  email: string;
  role: Role;
  kanjiName: {
    firstName: string;
    lastName: string;
  };
  furiganaName: {
    firstName: string;
    lastName: string;
  };
}

export const initialState: IProfileState = {
  email: '',
  role: Role.User,
  kanjiName: {
    firstName: '',
    lastName: '',
  },
  furiganaName: {
    firstName: '',
    lastName: '',
  },
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<IProfileState>) => {
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.furiganaName = { ...action.payload.furiganaName };
      state.kanjiName = { ...action.payload.kanjiName };
    },
  },
});

export const profileReducer = profileSlice.reducer;
export const profileAction = profileSlice.actions;
