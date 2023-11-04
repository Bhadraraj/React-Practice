import React from "react";
import { useState } from "react";
import '../App.css';

function UseState(){


    // if(true){ // Dont use useState inside  Conditional statement 
        
    // }F
    const[ initial, setval] = useState(0); // Function - Return array of values ;
                   //  inside() we give initial value 

function namee (){
    console.log("Bhadri");
}
                //    const [name, setName]=useState(namee());//  while using like this  if many state are used it will execute  when thats state is changed 
                   const [name, setName]=useState(()=> namee());


                   function incrementVal(){
                    // setval( initial+1)F
                    // setval( initial+1)
                    // setval( initial+1)
                    setval((initial)=>{return initial+1});
                    setval((initial)=>{return initial+1});
                    setval((initial)=>{return initial+1});
                   }
                   function decrementVal(){
                    setval( initial-1)   
                   

                   }
    return(
        <>
<button onClick={decrementVal} className="decBtn">-</button> 
<span> {initial} </span>
<button onClick={incrementVal}  className="incBtn">+</button>
<br/> 
        </>
    )
}
export default UseState ;
 