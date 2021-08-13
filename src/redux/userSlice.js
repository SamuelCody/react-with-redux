import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const updatedUser2 = createAsyncThunk("users/", async (user) => {
  const res = await axios.post(
    "http://localhost:8800/api/users/123/update",
    user
  );
  return res.data;
});

export const deleteUser = createAsyncThunk("users/", async (user) => {
  const res = await axios.post(
    "http://localhost:8800/api/users/123/update",
    user
  );
  return res.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: { name: "sam", email: "sam@gmail.com" },
    pending: null,
    error: false,
  },
  reducers: {
    // update: (state, action) => {
    //   state.name = action.payload.name;
    //   state.email = action.payload.email;
    // },
    // remove: (state) => {
    //   state.name = null;
    //   state.email = null;
    // },
    // addHello: (state, action) => {
    //   state.name = "Hello" + action.payload.name;
    // },
    // updateStart: (state) => {
    //   state.pending = true;
    // },
    // updateSuccess: (state, action) => {
    //   state.pending = false;
    //   state.userInfo = action.payload;
    // },
    // updateError: (state) => {
    //   state.error = true;
    //   state.pending = false;
    // },
  },
  extraReducers: {
    [updatedUser2.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updatedUser2.fulfilled]: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    [updatedUser2.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
    extraReducers: {
      [deleteUser.pending]: (state) => {
        state.pending = true;
        state.error = false;
      },
      [deleteUser.fulfilled]: (state, action) => {
        state.pending = false;
        state.userInfo = action.payload;
      },
      [deleteUser.rejected]: (state) => {
        state.pending = null;
        state.error = true;
      },
    },
  },
});

export const { updateStart, updateSuccess, updateError } = userSlice.actions;
export default userSlice.reducer;
