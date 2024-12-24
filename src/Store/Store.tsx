import { configureStore } from "@reduxjs/toolkit";
import isOpenReducer from "../Features/IsOpenSlice"
import countSlice from "../Features/countSlice"
const store = configureStore({
 reducer : {
 isOpen : isOpenReducer,
 count: countSlice
 }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 