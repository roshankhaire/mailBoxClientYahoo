import React, { Suspense } from "react"
import Header from "./Header"
import Grid from '@mui/material/Grid';

import Sidebar from "./Sidebar";
const Main=()=>{
    return(
        <>
        <div>
          <Header/>
          <Sidebar/>
        </div>
     
    
     
        </>
    )
}
export default Main