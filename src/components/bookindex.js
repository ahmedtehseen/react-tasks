import React,{Component} from 'react';
import {Link} from 'react-router';
import PRODUCTS from '../data/products';


export default class BookIndex extends Component {
	render() {
		return (
			<div>
				<p>Please click on a book to view details in a modal. You can copy/paste the link of
				the modal. The link will open book on a separate page.</p>
				<p><Link to="/cart" className="btn btn-danger">Cart</Link></p> 
				<div>
					{PRODUCTS.map(picture => (
						<Link key={picture.id}
						to={{pathname: `/products/${picture.id}`, 
						state: { modal: true, 
						returnTo: this.props.location.pathname }
						}
						}>
							<img style={{ margin: 10 }} src={picture.src} height="100" />
						</Link>
					))}
				</div>
			</div>
		)
	} 
}