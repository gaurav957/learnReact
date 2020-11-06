import React from 'react';
import './index.css'

function Backdrop(props){
    return(
        <div className="backdrop" onClick={props.cancel} style={{display:props.show?'block':'none'}}>
        </div>
    )
}

export default Backdrop;