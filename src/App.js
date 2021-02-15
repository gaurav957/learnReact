
import React from 'react';
import './App.css';
import BurgerBuilder from './screens/burger-builder';
import Checkout from './components/Checkout';
import Orders from './screens/Orders';
import axios from 'axios';
import {Link, Route,withRouter } from 'react-router-dom';

// axios.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   console.log(config)
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={BurgerBuilder}></Route>
      <Route path="/checkout" component={Checkout}></Route>
      <Route path="/orders" component={Orders}></Route>
    </div>
  );
}

export default App;
