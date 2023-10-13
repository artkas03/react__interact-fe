import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/user';

type UserState = {
  user: User | null,
}

const initialState: UserState = {
  user: null,
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    set(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { set } = userSlice.actions;