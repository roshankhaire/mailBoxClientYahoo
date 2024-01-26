import React from "react";
import Table from 'react-bootstrap/Table';
import classes from "./InboxView.module.css"
import { useState,useEffect } from "react";
import axios from "axios";

const InboxView=()=>{
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
 
  const deleteHandler=(id)=>{
    console.log("this is delete Handler",id)
    axios.delete(`https://654c394977200d6ba858a111.mockapi.io/mail/expenseCrudOperations/${id}`)
    .then(()=>{
       getData()
    })
 }
     return(
        <>
          <div className={classes.inboxviewcontainer} >
           
       {Email.map((emailData)=>{
          return(
            <div>
            <span><b>This is mail from</b></span>  {emailData.to}
            <div>
            <span>subject:</span>  {emailData.subject}
            </div>
            <div>
            <span>{emailData.message}</span>  
            </div>
            <div>
            <button onClick={()=>{deleteHandler(emailData.id)}}>Delete</button>
            </div>
          
             </div>
      

          )
        })
         
        }
          </div>
        </>
     )
}
export default InboxView