import { createSlice } from "@reduxjs/toolkit";

const IsOpenSlice = createSlice({
    name: "isOpen",
    initialState : false,
    reducers : {
        toggle: (state)=>{
       return !state
        }
    }
})

export default IsOpenSlice.reducer;
export const {toggle} = IsOpenSlice.actions;