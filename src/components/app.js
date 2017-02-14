import React,{Component} from 'react';
// importing navbar
import NavBar from './navBar';


export default class App extends Component {
	render(){	
		return (
			<div className="container-fluid" style={{padding:0}}>
				<NavBar/>
				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}
}