import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    user_db_data: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    getData: (state, action) => {
      state.user_db_data = action.payload;
    },
  },
});

export const { login, logout, getData } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const userDBData = (state) => state.user.user_db_data;

export default userSlice.reducer;
