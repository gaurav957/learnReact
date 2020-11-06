import React,{Component} from 'react';
import Auxi from '../../hoc/Auxi';
import Logo from '../../components/logo';
import './index.css';
import Burger from '../../components/Burger'
import BurgerControls from '../../components/BurgerControls'
import Order from '../../components/Order'
import Modal from '../../components/Modal'
import Backdrop from '../../components/Backdrop'
import Axios from 'axios';

class BurgerBuilder extends Component{

    state={
        ingredients:{
            meat:1,
            cheese:1,
            Salad:1,
            Bacon:1
        },
        price:4,
        buy:false,
        
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

    openModal=()=>{
        this.setState({buy:true});
    }

    hidebuy=()=>{
        this.setState({buy:false});
    }

    makeOrder=()=>{
        Axios.post('https://burger-bilder-1455c.firebaseio.com/order',{
            ...this.state
        }).then(response=>{console.log(response)}).catch(e=>{console.log(e)})
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
                <button onClick={this.openModal}>BUY</button>

                <Modal show={this.state.buy}>
                    <Order allIngredients = {this.state.ingredients} price={this.state.price} cancel={this.hidebuy} order={this.makeOrder}/>
                </Modal>
                <Backdrop show={this.state.buy} cancel={this.hidebuy} />
                
            </Auxi>
        )
        
    }
}

export default BurgerBuilder;