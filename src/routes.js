import React from 'react';
import { Route, IndexRoute } from 'react-router';

// importing components
import App from './components/app';
import TableView from './components/table';
import Content from './components/contentTooltip';
import TimerContainer from './components/timerContainer';
import BookStore from './components/bookStore';
import BookIndex from './components/bookindex';
import Product from './components/product';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
// book data
import PRODUCTS from './data/products';

let cartItems = {} 
const addToCart = (id) => { 
if (cartItems[id])
 cartItems[id] += 1
 else
 cartItems[id] = 1
};

export default (
	<Route path="/" component={App}>
		<IndexRoute component={TableView} />
		<Route path="/tooltip" component={Content}/>
		<Route path="/timer" component={TimerContainer}/>
		<Route path="/bookstore" component={BookStore}>
		 	<IndexRoute component={BookIndex}/>
		 	<Route path="/products/:id" component={Product} addToCart={addToCart} products={PRODUCTS} />
		 	<Route path="/cart" component={Cart} cartItems={cartItems} products={PRODUCTS}/>
		</Route>
		<Route path="/checkout" component={Checkout} cartItems={cartItems} products={PRODUCTS}/>
	</Route>
);