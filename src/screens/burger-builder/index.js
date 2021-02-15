import React,{Component} from 'react';
import Auxi from '../../hoc/Auxi';
import Logo from '../../components/logo';
import './index.css';
import Burger from '../../components/Burger'
import BurgerControls from '../../components/BurgerControls'
import Order from '../../components/Order'
import Modal from '../../components/Modal'
import Backdrop from '../../components/Backdrop'
import axios from 'axios';
import {Link, Route,withRouter } from 'react-router-dom';

class BurgerBuilder extends Component{

    state={
        ingredients:null,
        price:4,
        buy:false,
        
    }

    componentDidMount(){
        axios.get("https://burger-bilder-1455c.firebaseio.com/ingredients.json")
        .then(response=>{
            //console.log(response.data);
            this.setState({ingredients:response.data})
        })
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
        const { history } = this.props;
        const queryParams = [];
        for(var i in this.state.ingredients){
            queryParams.push(i+"="+this.state.ingredients[i])
            // console.log(i)
            // console.log(this.state.ingredients[i])
        }

        let queryString = queryParams.join("&");
        history.push({
            pathname: '/checkout',
            search: '?'+queryString+'&price='+this.state.price
        });
    //    axios.post('https://burger-bilder-1455c.firebaseio.com/order.json',{
    //         ...this.state
    //     }).then(response=>{console.log(response)}).catch(e=>{console.log(e)})
    }

    

    render(){


    let burgera = <div>Hello</div>;
    let createControls = "";

        if(this.state.ingredients){
            createControls = Object.keys(this.state.ingredients).map((key)=>{
                return <BurgerControls key={key} name={key}
                        increase ={this.increaseHandler}
                        decrease ={this.decreaseHandler}
                     />;
            })
            
            burgera = (
                <Auxi>
                    
                    <Burger allIngredients = {this.state.ingredients} />
                
                    {createControls}
                    <button onClick={this.openModal}>BUY</button>

                    <Modal show={this.state.buy}>
                        <Order allIngredients = {this.state.ingredients} price={this.state.price} cancel={this.hidebuy} order={this.makeOrder}/>
                    </Modal>
                    <Backdrop show={this.state.buy} cancel={this.hidebuy} />
                
                </Auxi>
            );

            
        }

        return(
            <div>
                <header>
                    <Logo />
                    <nav>
                        <Link to="/">Burger Builder</Link>
                        <br/>
                        <Link to="/orders">Orders</Link>
                    </nav>
                </header>
                {burgera}
            </div>
        )
        
    }
}

export default withRouter(BurgerBuilder);