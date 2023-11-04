import React, { useState } from "react";
function NameChange() {

    function handleNameChange() {
        const names = ["Gopal", "Ram", "Bhadri", "Mugesh"];
        const index = Math.floor(Math.random() * 4)
        // return names[index];
        setname(names[index])
    }

    // using state 
    const [name, setname]=useState("Subin");

    
    return (
        <>
            <h1>
              {/* Today's Lucky Winner is Mr.{handleNameChange()} */}
              Today's Lucky Winner is <span className="name">Mr.  {name}</span>
            
            </h1>
            <button onClick={handleNameChange}>Check Winner</button>
        </>
    )


   
}
export default NameChange;