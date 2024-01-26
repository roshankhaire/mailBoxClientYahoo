import { createSlice } from "@reduxjs/toolkit";

const initialState={
      emailRead:"not read",
}
const emailReadSlice=createSlice({
    name:"emailRead",
    initialState,
   
    reducers:{
        emailView(state,action){
            state.emailRead="read"
        }
      
 
       

    },

})
export const emailReadActions=emailReadSlice.actions;
export default emailReadSlice