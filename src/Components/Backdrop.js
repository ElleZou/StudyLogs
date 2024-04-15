import React from "react";
import './Backdrop.css';
const Backdrop = (props) => {
    return(

        <div className='backdrop'>
            {/*Put the child elements(ConfirmModal) of the component(BackDrop) into the BackDrop */}
            {props.children}
  
        </div>

    );
};
export default Backdrop;