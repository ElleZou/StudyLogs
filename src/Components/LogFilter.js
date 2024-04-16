import React from 'react';

const LogFilter = (props) => {
    //Create a response function that listens to the change event
    const changeHandler = e => {
        props.onYearChange(+e.target.value);
    }
    return(

        <div>
            Year:<select onChange={changeHandler} value={props.year}>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
        </select>
        </div>
    );
};
export default LogFilter;