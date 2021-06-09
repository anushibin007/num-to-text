import React, { useState } from "react";
import { Form, Accordion, Card } from "react-bootstrap";
import numWords from "num-words";

const NumberInputAndOutput = () => {
	const [number, setNumber] = useState("");

	const handleInputChanged = (event) => {
		setNumber(event.target.value);
	};

	const numToText = (aNumber) => {
		return numWords(aNumber);
	};

	const renderOutput = () => {
		if (number === "") {
			return <div>Please enter a number</div>;
		} else {
			try {
				if (isNaN(number)) {
					throw "Not a Number";
				} else {
					return numToText(number);
				}
			} catch (err) {
				console.error(err);
				return <div>Cannot convert that</div>;
			}
		}
	};

	return (
		<React.Fragment>
			{/*Input*/}
			<Form.Group>
				<Form.Label>Enter a number</Form.Label>
				<Form.Control type="text" value={number} onChange={handleInputChanged} autoFocus />
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
