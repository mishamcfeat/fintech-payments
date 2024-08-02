import React from "react";
import Checkout from "./components/Checkout/Checkout";
import ProductList from "./components/ProductList/ProductList";
import UserAccount from "./components/UserAccount/UserAccount";
import "./styles/globals.css";

const App: React.FC = () => {
  return (
    <div>
      <h1>Fintech Payments</h1>
      <ProductList />
      <Checkout />
      <UserAccount />
    </div>
  );
};

export default App;
