import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class NavBar extends React.Component{
	render(){
		return(
			<Navbar inverse collapseOnSelect>
		    <Navbar.Header>
		      <Navbar.Brand>
		        <a>React-Projects</a>
		      </Navbar.Brand>
		      <Navbar.Toggle />
		    </Navbar.Header>
		    <Navbar.Collapse>
		      <Nav>
		        <LinkContainer to="/">
		        <NavItem eventKey={1} >Home</NavItem>
		        </LinkContainer>
		        <LinkContainer to="/tooltip">
		        <NavItem eventKey={2} >ToolTip</NavItem>
		        </LinkContainer>
		        <LinkContainer to="/timer">
		        <NavItem eventKey={3} >Timer</NavItem>
		        </LinkContainer>
		      </Nav>
		    </Navbar.Collapse>
  		</Navbar>
		);
	}
}