import React from "react";
import Table from 'react-bootstrap/Table';
import classes from "./InboxView.module.css"
import { useState,useEffect } from "react";
import axios from "axios";

const SentView=()=>{
   const [Email,setEmail]=useState([])
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
  console.log(Email.length)
  function getData(){

    axios.get('https://654c394977200d6ba858a111.mockapi.io/mail/expenseCrudOperations')
    .then((res)=>{
       console.log(res.data);
       setEmail(res.data)
    })



}
   
     return(
        <>
          <div className={classes.inboxviewcontainer} >
           
       {Email.map((emailData)=>{
          return(
            <div>
            <span><b>your sent mails</b></span>  {emailData.to}
            <div>
            <span>subject:</span>  {emailData.subject}
            </div>
            <div>
            <span> {emailData.message}</span> 
            </div>
           
          
             </div>
      

          )
        })
         
        }
          </div>
        </>
     )
}
export default SentView