import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "./crudUser";

// export const store = configureStore({
//   reducer: {
//     crud: CrudUser,
//   },
// });

export const store = configureStore({
  reducer: {
    crud: crudReducer,
  },
});
