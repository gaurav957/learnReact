import React,{Component} from 'react';
import './index.css';
import Burger from '../Burger';
import axios from 'axios';
import {Route} from 'react-router-dom';
import Contactform from './ContactForm';

class Checkout extends Component{
    state={
        ingredients:{
            'Bacon':1,
            'Salad':1,
            'cheese':1,
            'meet':1
        },
        price:0,
        buy:true,
        
    }

    componentDidMount(){
        const paramsString = this.props.location.search;
        const query = new URLSearchParams(paramsString);
        const ingredients = {};
        for(let param of query){
            if(param[0]=='price'){
                this.state.price = param[1];
            }else{
                ingredients[param[0]] = param[1];
            }
            
        }

        this.setState({ingredients:ingredients})
    }

    placeOrder = ()=>{
             axios.post('https://burger-bilder-1455c.firebaseio.com/order.json',{
            ...this.state
        }).then(response=>{
            this.props.history.push('/')
        }).catch(e=>{
            console.log(e)
        })
    }

    continue = ()=>{
        console.log(this.props);
        this.props.history.push("/checkout/contact-form")
    }

    cancelOrder = ()=>{
        this.props.history.push('/')
    }

    render(){
        return(
            <div className="check-outer">
                <Burger allIngredients = {this.state.ingredients} />
                <div className="btn" onClick={this.cancelOrder}>Cancel</div>
                <div className="btn" onClick={this.continue}>Continue</div>
                <Route path={this.props.match.url+"/contact-form"}>
                    <Contactform burgerData={this.state} />
                </Route>
            </div>
        )
    }
    
}

export default Checkout