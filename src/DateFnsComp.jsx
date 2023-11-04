import React, { useState, useEffect } from 'react';
import './App.css'
const DateFnsComp = () => {
    const [currentDate, setCurrentDate] = useState(new Date());


    // useEffect(() => {
    //     setTimeout(() => {
    //       setCount((count) => count + 1);
    //     }, 1000);
    //   });
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000); // Update the date every second

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    // Destructuring date values
    const year = currentDate.getFullYear();
    const month =String( currentDate.getMonth() + 1).padStart(2,0); // Month is zero-based
    const day = String( currentDate.getDate()).padStart(2,0);
    const hours = String( currentDate.getHours()).padStart(2,0);
    const minutes = String( currentDate.getMinutes()).padStart(2,0);
    const seconds = String( currentDate.getSeconds()).padStart(2,0);

    return (
        <div className='timer'>
            {/* <h1>Current Date and Time:</h1> */}
            <p className='timerTitle'>Timer</p>
            <p>{`Date: ${day}/${month}/${year}`}</p>
            <p>{`Time: ${hours}:${minutes}:${seconds}`}</p>
        </div>
    );
};

export default DateFnsComp;
