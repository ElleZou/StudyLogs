import React, { useState } from 'react';
import './Logs.css';
import LogItem from './LogItem';
import LogFilter from './LogFilter';

const Logs = (props) => {
    //Create a State that stores the year
    const [year,setYear]=useState(2021);
    //Filter data to only display data for a certain year
    let filterData = props.logsData.filter(item => item.date.getFullYear() === year);
    //Create a function that modifies the year
    const changeYearHandler = (year) => {
        setYear(year);
    }
   
   //Use the method of traversing data when obtaining multiple sets of data
    const logItemData=filterData.map((item,index) => <LogItem  onDelLog={() => props.onDelLog(item.id)}
                                                                  key={item.id} date={item.date} 
                                                                  desc={item.desc} time={item.time}/>);
    
    //logsData.map(item => <LogItem {...item}/>)
    return (
        <div className = 'logs'>
            <LogFilter year={year} onYearChange={changeYearHandler}/>
            {
               //The boolean value of the array is always true
               //therefore determine the length of an array
               logItemData.length!==0?logItemData:<p className='no-log'>No log found</p>
            }        
       
        </div>
        
    );
};
export default Logs;
