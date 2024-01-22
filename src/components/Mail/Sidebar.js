import React from "react";
import "./Sidebar.css"
import SidebarOptions from "./SidebarOptions";
import ComposeDialog from "./ComposeDialog";
import EmailList from "./EmailList";
import Message from "./Message";
import { useState } from "react";
const Sidebar=()=>{
    const [openDialog,setopenDialog]=useState(false)
    const openHandler=()=>{
   
        setopenDialog(true)
      }
      return(
         <>
         <div class="sidebar">
               <div  class="left__sidebar">
                     <button class="btn" onClick={()=>openHandler()}>Compose</button>
                      <SidebarOptions/>
                      <ComposeDialog openDialog={openDialog} setopenDialog={setopenDialog}/>
               </div>
              <EmailList/>
              <Message/>
         </div>
               </>
         
      )
}
export default Sidebar;