import React from "react";
import styled from "styled-components";

const QuestionModel = ({ question, answer }) => {
	let startingTimer = 30;
	let remaining = 30;
	let progressWidth = remaining / startingTimer;
	let timer = setInterval(function() {
		remaining--;
		progressWidth = remaining / startingTimer;
		if (remaining === 0) {
			clearInterval(timer);
			console.log("finished!");
		}
	}, 1000);

	console.log(progressWidth);

	return (
		<ModalContainer>
			<TimerContainer>
				<ProgressBar width={progressWidth} />
			</TimerContainer>
			<h1>{question}</h1>
		</ModalContainer>
	);
};

const TimerContainer = styled.div`
	position: absolute;
	top: 0;
	margin: 50px auto;
	width: 300px;
	height: 10px;
	background-color: black;
	border-radius: 5px;
	position: relative;
`;

const ProgressBar = styled.div`
	position: absolute;
	top: 0;
	left: 0;
    background-color: green;
    width: 100%; 
	border-radius: 10px;
	height: 100%;
`;

const ModalContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	min-height: 100vh;
	width: 100%;
	background: linear-gradient(to right, #005c97, #363795);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 100px;

	h1 {
		font-size: 50px;
		font-family: "Neuton", serif;
		text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.8);
		color: white;
		text-align: center;
		text-transform: uppercase;
		max-width: 75%;
		font-weight: 400;
		letter-spacing: 1px;
		line-height: 1.1;
	}
`;

export default QuestionModel;
