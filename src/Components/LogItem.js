import React, { useState } from 'react';
import './LogItem.css';
import MyDate from './MyDate';
import ConfirmModal from './ConfirmModal';

const LogItem = (props) => {
    const[showConfirm,setShowConfirm]=useState(false);

    const deleteItemHandler =() => {
    //The initial value is set to false, so the window will not be displayed initially
        setShowConfirm(true)
    };

    const cancelHandler = () => {
        setShowConfirm(false)

    };
    const confirmHandler = () => {
        props.onDelLog()
        setShowConfirm(false)
    };
    
    
    return (
        <div className='item'>
        {/* When showConfirm is true, the modal window is displayed.*/}
        {/*The initial value is set to false, so the window will not be displayed initially */}
            {showConfirm && <ConfirmModal 
            cancel={cancelHandler}
            confirm={confirmHandler}
            confirmText='This operation is irreversible.'/>}
            
            
            <MyDate date={props.date}/>
            <div className='content'>
                <h2 className='desc'>{props.desc}</h2>
                <div className='time'>{props.time}</div>

            </div>
            <div>
                <div onClick={deleteItemHandler} className='delete'>✖️</div>
            </div>


           



        </div>
    );
}

export default LogItem;
