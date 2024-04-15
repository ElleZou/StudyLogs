import React from 'react';
import Logs from './Components/Logs';
import LogForm from './Components/LogForm';
import {useState} from 'react';
const App = () => {
    //Simulate a set of data loaded from the server
    const [logsData,setLogsData]=useState([
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
       ])
    //Pass data from sub-component（LogForm.js） to parent component(App.js)
       const saveLogHandler =(newLog) =>{
    //ID generated when data is stored 
    //The data is stored in the App and generated in LogForm,
    //so the id should be generated where it is stored.
        newLog.id=Date.now()+'';
    
    //Add new data to the array
        setLogsData([newLog,...logsData])
    };
    //Define a function to delete a log from the data
    const delLogByIndex = (index) =>{
        setLogsData(prevState => {
            const newLog=[...prevState];
            newLog.splice(index,1);
            return newLog;

        });
        
    };

    return (
        <div>
        
            <LogForm onSaveLog={saveLogHandler}/>
            <Logs logsData={logsData} onDelLog={delLogByIndex}/>
          
        </div>
    );
};

export default App;
