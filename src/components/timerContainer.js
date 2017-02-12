import React, { Component } from 'react';
import {  } from 'react-bootstrap';
import Timer from './Timer';
import TimerButton from './timerButton'


export default class TimerContainer extends React.Component {
	 constructor(props) {
		 super(props)
		 this.state = {timeLeft: null, timer: null}
		 this.startTimer = this.startTimer.bind(this)
	 }
	 startTimer(timeLeft) {
		 clearInterval(this.state.timer) 
		 let timer = setInterval(() => {
		 var timeLeft = this.state.timeLeft - 1
		 if (timeLeft == 0) clearInterval(timer)
		 this.setState({timeLeft: timeLeft}) 
		 }, 1000)
		 return this.setState({timeLeft: timeLeft, timer: timer})
	 }
 render() {
	 return (
	 <div >
	 	<h2>Timer Component</h2>
		 <div className="btn-group" role="group" >
			 <TimerButton time="5" startTimer={this.startTimer}/> 
			 <TimerButton time="10" startTimer={this.startTimer}/>
			 <TimerButton time="20" startTimer={this.startTimer}/>
		 </div>
	 	<Timer timeLeft={this.state.timeLeft}/>
	 </div>
	 );
 }
} 