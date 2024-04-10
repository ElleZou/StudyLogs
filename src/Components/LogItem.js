import React from 'react';
import './LogItem.css';
import MyDate from './MyDate';
import Content from './Content';

function LogItem() {
    return (
        <div className='item'>
            <MyDate month={"April"} day={"19"} />


            <Content content={"Study React"} time={"1H20M"} />



        </div>
    );
}

export default LogItem;
