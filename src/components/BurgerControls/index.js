import React from 'react'
import './index.css'

function BurgerControls(props){
    console.log(props)
    return (
        <div className="control">
            <span style={{"width":"100px","display":"inline-block"}}>{props.name}</span>
            <span onClick={()=>props.decrease(props.name)} className="negative">-</span>
            <span onClick={()=>props.increase(props.name)} className="positive">+</span>
        </div>
    )
}

export default BurgerControls