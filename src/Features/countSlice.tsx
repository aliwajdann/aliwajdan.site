import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: "count",
    initialState: 2,
    reducers:{
        increment :(state:any) => {
           return state + 1;
        },
        decrement :(state:any) => {
           return state - 1;
        }
    }
})

export default countSlice.reducer;
export const {increment, decrement} = countSlice.actions;
