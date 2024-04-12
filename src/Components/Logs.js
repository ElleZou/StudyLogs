import React from 'react';
import './Logs.css';
import LogItem from './LogItem';

const Logs = (props) => {

   
   //Use the method of traversing data when obtaining multiple sets of data
    const logItemData=props.logsData.map(item => <LogItem key={item.id} date={item.date} desc={item.desc} time={item.time}/>)
    //logsData.map(item => <LogItem {...item}/>)
    return (
        <div className = 'logs'>
            {
              logItemData
            }        
       
        </div>
        
    );
};
export default Logs;
