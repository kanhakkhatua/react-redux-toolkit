import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "./crudUser";
import singleReducer from "./SingleUser";

// export const store = configureStore({
//   reducer: {
//     crud: CrudUser,
//   },
// });

export const store = configureStore({
  reducer: {
    crud: crudReducer,
    singleUser: singleReducer,
  },
});
