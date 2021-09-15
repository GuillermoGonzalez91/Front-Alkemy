import { createSlice } from '@reduxjs/toolkit';

const loggedInUser = JSON.parse(localStorage.getItem('user'));

export const userSlice = createSlice({
  name: 'user',
  initialState: loggedInUser ? { user: loggedInUser } : {},
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    logout: (state, action) => {
      state.user = '';
      localStorage.removeItem('user');
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = state => state.user.user;

export default userSlice.reducer;
