import React from "react";
import './Content.css';

const Content = (props)=>{
    return(
    <div className='Content'>
        <div className='content'>
            {props.content}
        </div>
        <div className='time'>
            {props.time}

        </div>
    </div>   

    );
};

export default Content;