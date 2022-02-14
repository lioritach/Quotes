import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    user_db_data: null,
    likedPosts: [],
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.user_db_data = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.user_db_data = null;
    },
    getData: (state, action) => {
      state.user_db_data = action.payload;
    },
    like: (state, action) => {
      state.likedPosts = [...state.likedPosts, action.payload.data];
    },
  },
});

// export const likeSlice = createSlice({
//   name: "likes",
//   initialState: [],
//   reducers: {
//     like: (state, { payload }) => {
//       state.push(payload);
//     },
//   },
// });

export const { login, logout, getData, like } = userSlice.actions;
// export const { like } = likeSlice.actions;
export const selectUser = (state) => state.user.user;
export const userDBData = (state) => state.user.user_db_data;
export const saveLikedPost = (state) => state.user.like;

export default userSlice.reducer;
