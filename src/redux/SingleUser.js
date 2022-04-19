import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const SingleUser = createSlice({
  name: "singleUser",
  initialState,
  reducers: {
    singleData: (state, action) => {},
  },
});

export const { singleData } = SingleUser.actions;

export default SingleUser.reducer;
