import React from "react";
import './MyDate.css';
const MyDate = (props) => {
    return (
        <div className='mydate'>
            <div className='month'>
                {props.month}
            </div>
            <div className='day'>
                {props.day}

            </div>


        </div>
    );
}

export default MyDate;
