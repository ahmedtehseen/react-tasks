import React,{Component} from 'react';
import {Link} from 'react-router';


export default class Cart extends Component{
 	render() {
 		return(
	 		<div>
			 {(Object.keys(this.props.route.cartItems).length == 0) ? <p>Your cart is empty</p> : ''}
			 <ul>
				 {Object.keys(this.props.route.cartItems).map((item, index, list)=>{ 
				 return <li key={item}>{this.props.route.products[item].title} -
				 {this.props.route.cartItems[item]}</li>
				 })}
			 </ul>
			 <Link to="/checkout" className="btn btn-primary">Checkout</Link> 
			 <Link to="/bookstore" className="btn btn-info">Back to store</Link> 
			</div>
		);
	}
}
