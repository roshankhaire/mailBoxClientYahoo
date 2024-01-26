import React from "react"
import { Link, Outlet } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import classes from "./Inbox.module.css"
import { useDispatch, useSelector } from "react-redux";
import { ListItem } from '@mui/material';
import { emailReadActions } from "../store/EmailRead"



import EmailList from "./EmailList";

const Inbox=()=>{

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
 const openEmailHandler=()=>{
    console.log("email is open");
   setViewEmail()
  
    dispatch(emailReadActions.emailView())

    
 }

 const emailCount=Email.length;
 console.log(emailCount)
    return(
        <>
       
        <div  className={classes.container}>
          <Link to="inboxview" onClick={openEmailHandler} style={{textDecoration:"none"}}>
          
          {/* {?<p>emptyMessage</p>:<p>You have email</p>} */}
      
      {  emailCount===0 ?<p> <b style={{color:"black",fontSize:"20px"}}>you have no emails</b></p>: Email.map((emailData)=>{
            return(
       <li key={emailData.id}><b style={{color:"red",fontSize:"20px"}}>{viewEmail} </b> you have mail from  <b style={{fontSize:"20px",color:"black"}}>{emailData.to}</b></li>
       
             
           
          
           
           
         
       ) }) }
        </Link>
    
    
      
       
      
        <Outlet/>
        </div>
        
       
        
       
        
      
      

     
   
  
        </>
    )
}
export default Inbox