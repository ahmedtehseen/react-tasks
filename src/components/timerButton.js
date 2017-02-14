import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

export default class TimerButton extends Component {
 startTime(event) {
 return this.props.startTimer(this.props.time)
 }
 render() {
 	return (
 		<Button bsStyle="success" type="button" onClick={this.startTime.bind(this)}>
			{this.props.time} seconds
		</Button>
 	)
 }
} 