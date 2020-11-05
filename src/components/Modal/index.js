import React from 'react';
import './index.css'

function Modal(props){
    return(
        <div className="modal">
            {props.children}
       </div>
    )
}

export default Modal