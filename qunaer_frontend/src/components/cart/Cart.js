import React from 'react';
import './Cart.css';
import { renderRoutes } from 'react-router-config'
import Header from './header/Header';
import Navigation from './navigation/Navigation'
import List from './list/List'
import Settlement from './settlement/Settlement'
function Cart(props) {
    console.log(props)
    return (
        <div className="Cart">
            <Header />
            <Navigation />
            {/* <List /> */}
            <Settlement />
            {renderRoutes(props.route.routes)}
        </div>
    );

}
export default Cart;