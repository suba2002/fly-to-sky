import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    set_username:(state,action)=>{
      state.username=action.payload;
    }
  },
});

export const {
  set_username
} = userSlice.actions;


export default userSlice.reducer;
