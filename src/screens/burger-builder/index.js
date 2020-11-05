import React,{Component} from 'react';
import Auxi from '../../hoc/Auxi';
import Logo from '../../components/logo';
import './index.css';
import Burger from '../../components/Burger'
import BurgerControls from '../../components/BurgerControls'
import Order from '../../components/Order'
import Modal from '../../components/Modal'

class BurgerBuilder extends Component{

    state={
        ingredients:{
            meat:1,
            cheese:1,
            Salad:1,
            Bacon:1
        },
        price:4
        
    }

    increaseHandler=(ingredient)=>{
        this.setState((prevstate)=>({
            ingredients:{
                ...prevstate.ingredients,
                [ingredient]:prevstate.ingredients[ingredient]+1
            }
        }))
    }

    decreaseHandler=(ingredient)=>{
        this.setState((prevstate)=>({
            ingredients:{
                ...prevstate.ingredients,
                [ingredient]:prevstate.ingredients[ingredient]-1
            }
        }))
    }

    

    render(){
        let createControls = Object.keys(this.state.ingredients).map((key)=>{
            return <BurgerControls key={key} name={key}
                    increase ={this.increaseHandler}
                    decrease ={this.decreaseHandler}
                 />;
        })

        return(
            <Auxi>
                <header>
                    <Logo />
                    <nav>
                        <div>Burger Builder</div>
                    </nav>
                </header>
                <Burger allIngredients = {this.state.ingredients} />
            
                {createControls}
                <Modal>
                    <Order allIngredients = {this.state.ingredients} price={this.state.price} />
                </Modal>
                
            </Auxi>
        )
        
    }
}

export default BurgerBuilder;