import React,{Component} from 'react';
import axios from 'axios';

class Contactform extends Component{
    state={
        customer:{
            'name':'Gaurav',
            'phone':'8888888888'
        }        
    }

    placeOrder = (burgerData)=>{
        const fulldata = {
            customer:this.state.customer,
            buurgerDetails:burgerData
        }
        axios.post('https://burger-bilder-1455c.firebaseio.com/order.json',{
            fulldata
        }).then(response=>{
            this.props.history.push('/')
        }).catch(e=>{
            console.log(e)
        })
    }

    render(){
        return(
            <div>
                <input type="text" plcaeholder="name" value={this.state.customer.name}/>
                <input type="text" plcaeholder="phone number" value={this.state.customer.phone}/>
                <div className="btn" onClick={this.placeOrder(this.props.burgerData)}>Place Order</div>
            </div>
        )
    }
}

export default Contactform