import React,{Component} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Modal, Button } from 'react-bootstrap';

export default class Modall extends Component {
	 constructor(props) {
	 super(props)
		 this.state = {
		 	show: this.props.isOpen
		 }
	 }
	 render() {
		 return (
			 <div>
			 <Modal
          show={this.state.show}
          container={this}
          aria-labelledby="contained-modal-title">
          <Modal.Header>
            <Modal.Title>Book Store</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.children}
          </Modal.Body>
          <Modal.Footer>
            <LinkContainer to={this.props.returnTo}><Button bsStyle="danger">Back to Store</Button></LinkContainer>
          </Modal.Footer>
        </Modal>
			 </div>
		);
	}
}