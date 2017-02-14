import React, {Component} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Button} from 'react-bootstrap';

class Product extends Component {
	constructor(props) {
	 super(props)
	 this.handleBuy = this.handleBuy.bind(this)
	}
	handleBuy (event) {
	 this.props.route.addToCart(this.props.params.id) 
	}
	render() {
		return (
		 	<div>
			 	<img src={this.props.route.products[this.props.params.id].src} style={{ height: '80%' }} alt="some book"/>
			 	<p>{this.props.route.products[this.props.params.id].title}</p>
			 	<LinkContainer to={{pathname: `/cart`, state: { productId: this.props.params.id}}} onClick={this.handleBuy}>
			 	<Button bsStyle="success">Buy</Button>
			 	</LinkContainer>
		 	</div>
		)
	}
}

module.exports = Product