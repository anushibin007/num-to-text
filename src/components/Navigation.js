import "../css/navbar.css";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import About from "./About";

function Navigation() {
	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand>Number to Text converter</Navbar.Brand>
				<Navbar.Toggle aria-controls="ntc-navbar" />
				<Navbar.Collapse id="ntc-navbar">
					<Nav className="mr-auto">
						<About />
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			{/* This line is to make an AJAX call to the counter update function. This will just increment the counter in the background */}
			<img src="https://www.freevisitorcounters.com/en/home/counter/836896/t/0" style={{ display: "none" }}></img>
		</div>
	);
}

export default Navigation;
