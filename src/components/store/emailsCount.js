import { createSlice } from "@reduxjs/toolkit";

const initialState={
     emails:[{
        to:"roshshsh",
        from:"pranit",
        subject:"subject"
     }]
}
const emailsCountSlice=createSlice({
    name:"emailCount",
    initialState,
   
    reducers:{
         addEmails(state,action){
            const email={
                to:action.payload,
                from:action.payload,
                subject:action.payload,

            }
            state.emails.push(email)

         }
      
 
       

    },

})
export const emailCountActions= emailsCountSlice.actions;
export default  emailsCountSlice