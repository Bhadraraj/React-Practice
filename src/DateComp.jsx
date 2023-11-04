import React from 'react';
import './App.css'

class DateComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date()
        };
    }

    render() {
        const { currentDate } = this.state;

        // Get various components of the date
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1; // Note: Month is zero-based (0-11)
        const day = currentDate.getDate();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();

        return (
            <div className='timer'>
                <h1>Current Date and Time:</h1>
                <p>{`Date: ${day}/${month}/${year}`}</p>
                <p>{`Time: ${hours}:${minutes}:${seconds}`}</p>
            </div>
        );
    }
}

export default DateComp;
