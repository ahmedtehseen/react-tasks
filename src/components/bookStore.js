import React,{Component} from 'react';
// importing components
import Modal from './Modal';



export default class Bookstore extends Component{

	componentWillReceiveProps(nextProps) {
		 this.isModall = (nextProps.location.state &&
		 nextProps.location.state.modal)
		 if (this.isModall &&
		 nextProps.location.key !== this.props.location.key) {
		 this.previousChildren = this.props.children
		 }
	 } 
	render(){
		return(
			<div className="well">
			 <h1>Book Store</h1>
			 <div>
				 {(this.isModall) ? this.previousChildren : this.props.children}
				 {(this.isModall)?
				 <Modal isOpen={true} returnTo={this.props.location.state.returnTo}>
				 {this.props.children}
				 </Modal> : ''
				 }
			 </div>
			</div>
		);
	}
}