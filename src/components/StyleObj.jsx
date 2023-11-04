import React from 'react'
 function StyleObj(){
    let mystyle={
       color:"blueviolet",
       fontSize:"40px",
    }
    return(
    <>
    {/* Inline Style */}
{/* <h1 style={mystyle}> React Tutorial by Bhadri</h1> */}
   <h1 style={{
       color:"blueviolet",
       fontSize:"40px",
    }}>
   React Tutorial by Bhadri
   </h1>
    </>
    )
    
 }
 export default StyleObj;
