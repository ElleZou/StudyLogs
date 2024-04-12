import React from 'react';
import './LogItem.css';
import MyDate from './MyDate';

function LogItem(props) {
    const deleteItemHandler =() => {
        const isDel=window.confirm('Delete');
        if(isDel){
            //delete current item:removes the specified data from the data's State
            props.onDelLog();
        }
    };
    return (
        <div className='item'>
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
