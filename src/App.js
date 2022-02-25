import React, { useState, useEffect } from "react";
import OrderForm from "./components/OrderForm";
import { Switch, Link, Route } from "react-router-dom";
import './App.css';

const initialOrder = [];

const App = () => {

  const [orders, setOrders] = useState(initialOrder);

  const submitOrder = (newOrder) => {
    // console.log(newOrder);
    setOrders([...orders, newOrder]) 
  }

  useEffect(() => {
    console.log(orders);
  })

  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/pizza" id="order-pizza">Click here to start your order</Link>
      </header>
      <Switch>
        <Route exact path="/">
          <h1>Lambda Eats</h1>
          <h3>Let's customize a pizza!</h3>
        </Route>
        <Route path="/pizza">
          <OrderForm submitOrder={submitOrder}/>
        </Route>
      </Switch>
    </>
  );
};
export default App;
