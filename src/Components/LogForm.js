
import './LogForm.css';
import Card from './Card';
import  React, { useState } from 'react';



const LogForm = (props) => {
    //Create three variables to store data
    //let inputDesc='';
    //let inputDate='';
    //let inputTime=0;
    const[inputDate, setInputDate]=useState('');
    const[inputDesc, setInputDesc]=useState('');
    const[inputTime, setInputTime]=useState(0)
    
    

    //Creat a response function to monitor content changes
    const descChangeHandler = (e) => {
        // Get the object that currently triggers the event
        //The event object stores all the information when the current event is triggered.
        //event.target executes the object that triggered the event (DOM object)
        setInputDesc(e.target.value);
        
    }
    
    
    //Creat a response function to monitor date changes
    const dateChangeHandler = (e) => {
        // Get the object that currently triggers the event
        //The event object stores all the information when the current event is triggered.
        //event.target executes the object that triggered the event (DOM object)
        setInputDate(e.target.value);
        
    }
    
    
    //Creat a response function to monitor time changes
    const timeChangeHandler = (e) => {
        // Get the object that currently triggers the event
        //The event object stores all the information when the current event is triggered.
        //event.target executes the object that triggered the event (DOM object)
        setInputTime(e.target.value);
        
    }
    
    
    //When the form is submitted, summarize the data in the form
    const formSubmitHandler = (e) => {
    //First cancelling the default behavior of the form
        e.preventDefault();
    //Get three data in the form items：inputDate inputDesc inputTime 
    //Assemble these three data into an object
        const newLog = {
            date:new Date(inputDate),
            desc:inputDesc,
            time:+inputTime //"+" can make the inputTime convert string to number

        };
        props.onSaveLog(newLog);
    //clear the form when click the "Submit" botton clear the form
        setInputDate('');
        setInputDesc('');
        setInputTime('');
    }


    return (
        
        <Card>
            <form onSubmit={formSubmitHandler}>
                <div className='form-item'>
                    <label htmlFor='date'>DATE</label>
                    <input onChange={dateChangeHandler} value={inputDate} id='date' type='date'/>
                </div>
                <div className='form-item'>
                    <label htmlFor='desc'>CONTENT</label>
                    <input onChange={descChangeHandler} value={inputDesc} id='desc' type='text' />
                </div>
                <div className='form-item'>
                    <label htmlFor='time'>TIME</label>
                    <input onChange={timeChangeHandler} value={inputTime} id='time' type='number' />
                </div>
                <div className='form-btn'>
                    <button>
                        Submit
                    </button>
                </div>

            </form>
        </Card>


    );
};

export default LogForm;
