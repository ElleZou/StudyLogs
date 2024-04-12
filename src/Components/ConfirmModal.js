import React from 'react';
import './ConfirmModal.css';
const ConfirmModal = () => {
    return(
        <div className='confirmModal'>
            <div className='text'>
            <p>This operation is irreversible</p>
            </div>
            <div className='confirmbutton'>
                <button>confirm</button>
                <button>cancel</button>
            </div>
        
        </div>
    );
};
export default ConfirmModal;