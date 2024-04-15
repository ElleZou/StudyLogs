import React from "react";
import './Backdrop.css';
import ReactDOM from "react-dom";
const backdropRoot=document.getElementById('backdrop-root');

const Backdrop = (props) => {
    return ReactDOM.createPortal(
        <div className='backdrop'>
            {/*Put the child elements(ConfirmModal) of the component(BackDrop) into the BackDrop */}
            {props.children}
  
        </div>, backdropRoot);
};
export default Backdrop;