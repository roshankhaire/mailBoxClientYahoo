import React from "react";
import "./Sidebar.css"

import ComposeDialog from "./ComposeDialog";
import EmailList from "./Inbox";
import Message from "./Sent";
import { useState,useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios"
const Sidebar=()=>{
      const emailCoun=useSelector(state=>state.emailCount.emails)
 
    const [openDialog,setopenDialog]=useState(false)//for open and close dialouge

   
    const [emailCount,setEmailCount]=useState([]) //get emailCount number
   
    const openHandler=()=>{
   
        setopenDialog(true)
      }
      useEffect(()=>{
            axios.get("https://654c394977200d6ba858a111.mockapi.io/mail/expenseCrudOperations")
            .then((response)=>{
                console.log(response.data);
                setEmailCount(response.data)
        
            })
            .catch((err)=>{
                console.log("err");
            })
         },[])
         console.log(emailCount.length)
         const eCount=emailCount.length
      return(
         <>
         <div class="sidebar">
               <div  class="left__sidebar">
                     <button style={{backgroundColor:"#C2E7FF",borderRadius:"5px",margin:"20px 20px"}} 
                     onClick={()=>openHandler()}>Compose</button>
                     <div class="inbox">
                      <Link to="inbox" style={{textDecoration:"none",border:"2px solid blue",borderRadius:"5px"
                      ,margin:"20px 20px",color:"black",fontSize:"20px"}}>
                         Inbox <span>{eCount}</span></Link>
                     </div>
                     <div>
                      <Link to="sent" style={{textDecoration:"none",border:"2px solid blue",borderRadius:"5px",
                      margin:"20px 20px",color:"black",fontSize:"20px"}}> Sent <span>{eCount}</span></Link>
                     </div>
                      <ComposeDialog openDialog={openDialog} setopenDialog={setopenDialog}/>
               </div>
               <div>
              <Outlet/>
               </div>
             
         </div>
               </>
         
      )
}
export default Sidebar;