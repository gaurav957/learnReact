import React from 'react'
import './index.css'

const Order=(props)=>{

    let finalBurger = [];
    function renderItems(){
        for (const [key, value] of Object.entries(props.allIngredients)) {

            finalBurger.push(

                <li key={key}>
                    <div className="orderItem">{key}:</div>
                    <div className="orderItemQuant">{value}</div>
                </li>

            )
    
        }

        return finalBurger

    }

    return(
        <div>
            <div className="orderItems">
                <ul>
                {renderItems()}
               </ul>
            </div>
            <div className="price">Price:{props.price}</div>
            <div className="btn" onClick={props.cancel}>Cancel</div>
            <div className="btn" onClick={props.order}>Checkout</div>
        </div>
    )
}

export default Order