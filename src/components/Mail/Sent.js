import React from "react"
import { Link, Outlet } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import classes from "./Inbox.module.css"
import { useDispatch, useSelector } from "react-redux";
import { ListItem } from '@mui/material';
import { emailReadActions } from "../store/EmailRead"
// import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EmailList from "./EmailList";

const Sent=()=>{

  const [Email,setEmail]=useState([])
  const [viewEmail,setViewEmail]=useState("not view")
 
  const dispatch=useDispatch()
  useEffect(()=>{
    axios.get("https://654c394977200d6ba858a111.mockapi.io/mail/expenseCrudOperations")
    .then((response)=>{
        console.log(response.data);
        setEmail(response.data)

    })
    .catch((err)=>{
        console.log("err");
    })
 },[])
 const emailCount=Email.length;
 console.log(emailCount)

    return(
        <>
       
        <div  className={classes.container}>
          <Link to="sentview"  style={{textDecoration:"none"}}>
          
          
      
       { emailCount===0?<p style={{color:"black",fontSize:"20px"}}>You have no sent emails</p>:Email.map((emailData)=>{
            return(
       <li><b> you sent email to</b> <b style={{color:"black",fontSize:"20px"}}>{emailData.to}</b></li>
       
             
           
          
           
           
         
       ) })}
        </Link>
    
    
      
       
      
        <Outlet/>
        </div>
        
       
        
       
        
      
      

     
   
  
        </>
    )
}
export default Sent