import React from 'react';
import './Logs.css';
import LogItem from './LogItem';

const Logs = (props) => {
//Simulate a set of data loaded from the server
   const logsData=[
    {
        id:'001',
        date:new Date(2021,1,20,18,30),
        desc:'Study React',
        time:30
    },
    {
        id:'002',
        date:new Date(2022,5,25,14,30),
        desc:'Study CSS',
        time:40
    },
    {
        id:'003',
        date:new Date(2023,3,20,16,30),
        desc:'Study HTML',
        time:50
    },
    {
        id:'004',
        date:new Date(2024,1,20,17,30),
        desc:'Study C++',
        time:60
    },
   ]
   //Use the method of traversing data when obtaining multiple sets of data
    const logItemData=logsData.map(item => <LogItem key={item.id} date={item.date} desc={item.desc} time={item.time}/>)
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
