import React,{Component} from 'react';
import {Table} from 'react-bootstrap';


export default class Checkout extends Component {
 	render() {
 		let count = 0
 		return( 
	 		<div>
		 		<h1>Invoice</h1>
		 		<Table striped bordered condensed hover>
		 			<tbody>
					 {Object.keys(this.props.route.cartItems).map((item, index, list)=>{ 
					 count += this.props.route.cartItems[item]
					 return( 
						 <tr key={item}>
							 <td>{this.props.route.products[item].title}</td>
							 <td>{this.props.route.cartItems[item]}</td>
						 </tr>
						)
					 })}
				 	</tbody>
				</Table>
				<p>Total: {count}</p>
			</div>
			);
 }
}