import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

export default class Timer extends Component {
 render() {
 if (this.props.timeLeft == null || this.props.timeLeft == 0)
 return(
 	<div/>
 )
 	const {timeLeft} = this.props
 return(
 	<div>
 	<h1>{this.props.timeLeft} second(s) left</h1>
 	<ProgressBar now={parseInt(timeLeft)} label={`${timeLeft}`} max={20}/>
 	</div>
 ); 
 }
} 

