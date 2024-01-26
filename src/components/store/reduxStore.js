import { configureStore } from "@reduxjs/toolkit";
import emailReadSlice from "./EmailRead";
import authSlice from "./auth";
import emailsCountSlice from "./emailsCount";
import dialogSlice from "./dialog";
const reduxStore=configureStore({
    reducer:{
        
        emailRead:emailReadSlice.reducer,
        auth:authSlice.reducer,
        emailCount:emailsCountSlice.reducer,
        dialog:dialogSlice.reducer

    }
})
export default reduxStore