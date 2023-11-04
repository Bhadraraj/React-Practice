import React, { useState } from 'react';
import '../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; 



function Event (){

    const [msg, updatedMsg]=useState(" Please Login / Sign Up")
    const handleEvent =(e)=>{
console.log("SUCCESSFULLY lOGINED");
console.log(e.type);
console.log(e)
    }
    const login =()=>{updatedMsg("Logined Successfully ")

    }
    const signUp =()=>{updatedMsg("Sign up Successfully ")

}
    return (
        <>
{/*  e-> to get all the event object  */}
        <button onClick={login}>Login</button>
        <button onClick={signUp}>Sign Up</button>
       <div  className='my-3  resLogin'>{msg}</div>
       {/* <button onLoad={(e)=>{handleEvent(e)}}  >Double Click</button> */}
       {/* <button onLoad={(e)=>{handleEvent(e)}}>Double Click</button> */}
       
       </>
    )
}
export default Event

