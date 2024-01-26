import { createSlice } from "@reduxjs/toolkit";
const initialState={
    isOpenDialog:false,
}
const dialogSlice=createSlice({
    name:"dialog",
    initialState,
    reducers:{
        openDialog(state,action){
            state.isOpenDialog=true
        },
        closedDialog(state,action){
            state.isOpenDialog=false
        }
    }

})
 export const dialogActions=dialogSlice.actions;
 export default dialogSlice
