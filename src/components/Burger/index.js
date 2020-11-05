import React from 'react'
import './index.css'

function Burger(props){

    

    let finalBurger = [];

   function renderIngredient() {
        for (const [key, value] of Object.entries(props.allIngredients)) {

            switch(key){
    
                case "meat":
                    loopIngredients('Meat',value)
                    break;
                case "cheese":
                    loopIngredients('Cheese',value)
                    break;
                case "Salad":
                    loopIngredients('Salad',value)
                    break;
                case "Bacon":
                    loopIngredients('Bacon',value)
                    break;
                
    
            }
    
        }

        return finalBurger;
    }

    function loopIngredients(ingredient, value){
        for(let i=0; i<value; i++){
        finalBurger.push(<div key={ingredient+"_"+i} className={ingredient}></div>)
        }
        
    }


    return(

        <div className="Burger">
            <div className="BreadTop"> <div className="Seeds1"></div></div>
            {renderIngredient()}
            <div className="BreadBottom"></div>
        </div>
    )
}

export default Burger