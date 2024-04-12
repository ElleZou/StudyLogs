import React from 'react';
import './Logs.css';
import LogItem from './LogItem';

const Logs = (props) => {

   
   //Use the method of traversing data when obtaining multiple sets of data
    const logItemData=props.logsData.map((item,index) => <LogItem logIndex={index} onDelLog={props.onDelLog}
                                                                  key={item.id} date={item.date} 
                                                                  desc={item.desc} time={item.time}/>);
    
    //logsData.map(item => <LogItem {...item}/>)
    return (
        <div className = 'logs'>
            {
               //The boolean value of the array is always true
               //therefore determine the length of an array
               logItemData.length!==0?logItemData:<p className='no-log'>No log found</p>
            }        
       
        </div>
        
    );
};
export default Logs;
