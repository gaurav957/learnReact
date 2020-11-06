import React from 'react';
import './index.css'

function Modal(props){
    return(
        <div className="modal" style={{display:props.show?"block":"none"}}>
            {props.children}
       </div>
    )
}

export default Modal