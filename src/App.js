import React from "react";
import OrderForm from "./components/OrderForm";
import { Switch, Link, Route } from "react-router-dom";
import './App.css';



const App = () => {

  return (
    <>
      <header>
        <Link to="/" id="order-pizza">Home</Link>
        <Link to="/pizza">Click here to start your order</Link>
      </header>
      <Switch>
        <Route exact path="/">
          <h1>Lambda Eats</h1>
          <h3>Let's customize a pizza!</h3>
        </Route>
        <Route path="/pizza">
          <OrderForm/>
        </Route>
      </Switch>
    </>
  );
};
export default App;
