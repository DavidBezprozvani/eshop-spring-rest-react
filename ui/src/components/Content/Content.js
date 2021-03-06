import React from 'react';
import {Switch, Route} from "react-router-dom"
import LandingPage from "../../pages/LandingPage/LandingPage";
import Products from "../../pages/Products/Products";
import About from "../../pages/About/About";
import ProductForm from "../../pages/ProductForm/ProductForm";
import Cart from "../../pages/Cart/Cart";
import NotFound from "../../pages/NotFound/NotFound";
import SingleProduct from "../../pages/Products/SingleProduct";
import Login from "../../pages/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export default () => (
    <main className="container">
        <Switch>
            <Route exact path="/">
                <LandingPage/>
            </Route>
            <PrivateRoute path="/products/new" roles={['ADMIN']}>
                <ProductForm/>
            </PrivateRoute>
            <Route path="/products/:id">
                <SingleProduct/>
            </Route>
            <Route path="/products">
                <Products/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <PrivateRoute path="/cart">
                <Cart/>
            </PrivateRoute>
            <Route>
                <Login/>
            </Route>
            <Route path="*">
                <NotFound/>
            </Route>
        </Switch>
    </main>
)