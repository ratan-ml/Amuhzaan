import './css_reset.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import ProductIndex from './components/ProductIndex';
import ProductShow from './components/ProductShow';
import CartIndex from './components/CartIndex';
import CheckoutPage from './components/CheckoutPage';
import HomePage from './components/HomePage';
import SearchResults from './components/SearchResults';


function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/categories/:categoryName">
            <ProductIndex />
          </Route>
          <Route exact path="/products/:productId">
            <ProductShow />
          </Route>
          <Route exact path="/cart">
            <CartIndex />
          </Route>
          <Route exact path="/checkout">
            <CheckoutPage />
          </Route>
          <Route exact path="/search/:term">
            <SearchResults />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
    </>
  );
}

export default App;
