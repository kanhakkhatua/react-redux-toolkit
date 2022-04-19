import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const CrudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    allData: (state, action) => {
      let copyArr = state;

      copyArr.push(action.payload);
      state = copyArr;
      //   console.log(state);
    },
  },
});

export const { allData } = CrudSlice.actions;

export default CrudSlice.reducer;
