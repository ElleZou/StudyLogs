import React from 'react';
import './ConfirmModal.css';
import Backdrop from './Backdrop';
const ConfirmModal = (props) => {
    return (
        <Backdrop>
            <div className='confirmModal'>
                <div className='text'>
                    <p>{props.confirmText}</p>
                </div>
                <div className='confirmbutton'>
                    <button onClick={props.confirm}>confirm</button>
                    <button onClick={props.cancel}>cancel</button>
                </div>

            </div>
        </Backdrop>
    );
};
export default ConfirmModal;