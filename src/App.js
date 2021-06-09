import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { Container } from "react-bootstrap";
import NumberInputAndOutput from "./components/NumberInputAndOutput.js";
import Navigation from "./components/Navigation.js";
function App() {
	return (
		<Container>
			<Navigation />
			<NumberInputAndOutput />
		</Container>
	);
}

export default App;
