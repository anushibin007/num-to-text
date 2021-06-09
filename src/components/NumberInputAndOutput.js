import React, { useState } from "react";
import { Form, Accordion, Card } from "react-bootstrap";

const NumberInputAndOutput = () => {
	const [number, setNumber] = useState("");

	const handleInputChanged = (event) => {
		setNumber(event.target.value);
	};

	const numToText = (number) => {
		return parseInt(number);
	};

	const renderOutput = () => {
		if (number === "") {
			return <div>Please enter a number</div>;
		} else {
			return numToText(number);
		}
	};

	return (
		<React.Fragment>
			{/*Input*/}
			<Form.Group>
				<Form.Label>Enter a number</Form.Label>
				<Form.Control type="text" value={number} onChange={handleInputChanged} />
			</Form.Group>

			<br />

			{/*Output*/}
			<Accordion defaultActiveKey="0">
				<Card>
					<Accordion.Toggle as={Card.Header} eventKey="0">
						Converted Text
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="0">
						<Card.Body>{renderOutput()}</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</React.Fragment>
	);
};

export default NumberInputAndOutput;
