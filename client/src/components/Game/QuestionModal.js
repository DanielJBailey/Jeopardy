import React from "react";
import styled from "styled-components";

class QuestionModal extends React.Component {
	state = {
		timer: 15
	};

	componentDidUpdate() {
		console.log(this.state);
	}

	componentDidMount() {
		this.startTimer();
	}

	startTimer = () => {
		let { timer } = this.state;
		this.setState({
			timer: timer--
		});
		let countDown = setInterval(() => {
			if (timer >= 0) {
				this.setState({
					timer: timer--
				});
			} else clearInterval(countDown);
		}, 1000);
	};

	render() {
		let { question, answer } = this.props;
		let { timer } = this.state;
		return (
			<ModalContainer>
				<TimerContainer>
					<ProgressBar
						width={timer}
						style={
							timer > 10
								? { backgroundColor: "#00b894" }
								: timer > 5
								? { backgroundColor: "#ffeaa7" }
								: { backgroundColor: "#d63031" }
						}
					/>
				</TimerContainer>
				<h1>{question}</h1>
			</ModalContainer>
		);
	}
}

const TimerContainer = styled.div`
	position: absolute;
	top: 0;
	margin: 50px auto;
	width: 300px;
	height: 10px;
	background-color: black;
	border-radius: 5px;
`;

const ProgressBar = styled.div`
	position: absolute;
	top: 0;
    left: 0;
    transition: 0.2s;
	background-color: green;
	width: ${props => (props.width / 15) * 100 + "%"};
	border-radius: 10px;
	height: 100%;
	margin: 0 auto;
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

export default QuestionModal;
