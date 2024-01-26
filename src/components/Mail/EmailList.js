const EmailList=(props)=>{
       return(
        <>
        <ul>
            <li>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <div> <h1>Email lisi {props.to}</h1></div>
            <div> <button>Delete</button></div>
       
       
        </div>
            </li>
        </ul>
       
      
        </>
       )
}
export default EmailList