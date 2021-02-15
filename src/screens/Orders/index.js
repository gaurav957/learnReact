import React,{Component} from 'react';
import axios from 'axios';

class Orders extends Component{

    state={
        allOrders : []
    }

    componentDidMount(){
        const allData = [];
        axios.get("https://burger-bilder-1455c.firebaseio.com/order.json")
        .then(response=>{
            for(let key in response.data){
                allData.push(response.data[key])
            }
            this.setState({allOrders:allData});
        })
        
        
        
    }

    render(){
        return(
           <div className="orders">
                {this.state.allOrders.map((order,index)=>(
                    <div>Order No:{index}---Price:{order.price}</div>
                ))}
           </div>
        )
    }
}

export default Orders