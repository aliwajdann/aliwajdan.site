import { configureStore } from "@reduxjs/toolkit";
import isOpenReducer from "../Features/IsOpenSlice"
const store = configureStore({
 reducer : {
 isOpen : isOpenReducer
 }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;