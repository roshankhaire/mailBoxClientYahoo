import React from "react";
import Image from "../Images/google.jpg";
import classes from "./Home.module.css";


const Home=()=>{
    return(
        <>
        <div  className={classes.container} >
       
        <img src={Image} width="1800px" height="800px"/>
        </div>
  
       
       
        </>
    )
}
export default Home