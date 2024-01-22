import React from "react"
import Dialog from '@mui/material/Dialog';
import { useState } from "react";
import axios from "axios";

import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const ComposeDialog=({openDialog,setopenDialog})=>{
    const [to,setTo]=useState("")
    const [subject,setSubject]=useState("");
    const [message,setMessage]=useState("")
    console.log(to)
    console.log(subject)
    console.log(message)
    const emailObject={
        to:to,
        subject:subject,
        message:message
    }
    const dialogstyle={
        height:"90%",
        width:"80%",
        maxWidth:"100%",
        maxHeght:"100%"
    }
    const closeHandler=()=>{
        setopenDialog(false)
    }
    const submitHandler=(e)=>{
             e.preventDefault();
          console.log(emailObject)
          axios.post("https://654c394977200d6ba858a111.mockapi.io/mail/expenseCrudOperations",emailObject)
          .then((response)=>{
             console.log(response);
            
          })
          .catch((err)=>{
             console.log(err);
          })

          closeHandler()
          alert("email sent successfully")
    }
    return(
        <Dialog open={openDialog}
        PaperProps={{
            sx:dialogstyle
        }}>
             
             <div className="message">
                <h4>New Message</h4>
            <button onClick={()=>closeHandler()}> Close</button>
             
              
             </div>
             <div>
                <div><InputBase placeholder="Reciepient"
                type="text" name="user_email" value={to} onChange={(e)=>setTo(e.target.value)} /></div>
                <div> <InputBase placeholder="subject"
                type="text" name="user_name" value={subject} onChange={(e)=>setSubject(e.target.value)}/></div>
               
             </div>
            
          <TextField  placeholder="message" multiline rows={20} 
          type="text" name="user_message" value={message} onChange={(e)=>setMessage(e.target.value)}></TextField>
           
             <div>
                <Button id="btn" onClick={submitHandler} >Send</Button>
             </div>
        </Dialog>
    )
}
export default ComposeDialog