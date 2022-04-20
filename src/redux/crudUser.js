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
    updateEditData: (state, action) => {
      state = action.payload;
      return state;
    },
    deleteData: (state, action) => {
      let arr = state;
      arr.splice(action.payload, 1);
      state = arr;
    },
  },
});

export const { allData, updateEditData, deleteData } = CrudSlice.actions;

export default CrudSlice.reducer;
