import React from "react";
import './MyDate.css';
const MyDate = (props) => {
    const month=props.date.toLocaleString('en-US',{month:'short'})
    const day=props.date.getDate()
    return (
        <div className='mydate'>
            <div className='month'>
               {month}
            </div>
            <div className='day'>
               {day}

            </div>


        </div>
    );
}

export default MyDate;
