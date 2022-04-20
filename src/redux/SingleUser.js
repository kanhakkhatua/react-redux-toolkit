import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const SingleUser = createSlice({
  name: "singleUser",
  initialState,
  reducers: {
    singleData: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { singleData } = SingleUser.actions;

export default SingleUser.reducer;
