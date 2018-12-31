import React from "react";
import styled from "styled-components";
import alert from "sweetalert2";

class QuestionModal extends React.Component {
	state = {
		timer: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		answer: ""
	};

	componentDidMount() {
		this.startTimer();
	}

	startTimer = () => {
		let { timer } = this.state;
		window.countDown = setInterval(() => {
			if (timer.length > 0) {
				timer.pop();
				this.setState({
					timer: timer
				});
			} else clearInterval(window.countDown);
		}, 1000);
	};

	renderTimer = color => {
		return this.state.timer.map(item => (
			<ProgressSquare color={color} key={item} />
		));
	};

	handleChange = ({ target: { name, value } }) => {
		this.setState({
			[name]: value
		});
	};

	checkAnswer = userAnswer => {
		let { accepted_answers } = this.props;
		accepted_answers = accepted_answers.replace(/\s*,\s*/g, ",").split(",");
		console.log(accepted_answers);
		return accepted_answers.indexOf(userAnswer) > -1;
	};

	handleSubmit = e => {
		let {close, value, increase, decrease} = this.props;
		e.preventDefault();
		let userAnswer = this.state.answer;
		if (this.checkAnswer(userAnswer)) {
			this.setState({
				answer: ""
			}, () => {
				alert("Correct!", `Nice job you just won $${value}!`, "success");
				clearInterval(window.countDown);
				increase(value)
				close();
			})
			
		} else {
			this.setState({
				answer: ""
			}, () => {
				alert("Wrong!", `Sorry, you just lost $${value}`, "error");
				clearInterval(window.countDown);
				decrease(value)
				close();
			})
		}
	};

	render() {
		let { question } = this.props;
		let { timer } = this.state;
		let color;
		if (timer.length > 7) {
			color = "green";
		} else if (timer.length > 4) {
			color = "yellow";
		} else {
			color = "red";
		}

		return (
			<ModalContainer>
				<TimerContainer>{this.renderTimer(color)}</TimerContainer>
				<h1>{question}</h1>
				<AnswerForm onSubmit={this.handleSubmit}>
					<input
						placeholder="Type your answer..."
						name="answer"
						onChange={this.handleChange}
						autoFocus
					/>
				</AnswerForm>
			</ModalContainer>
		);
	}
}

const AnswerForm = styled.form`
	display: flex;
	margin-top: 25px;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	color: white;
	font-size: 25px;
	text-align: center;

	input {
		width: 600px;
		padding: 20px;
		background-color: transparent;
		border: none;
		outline: none;
		text-align: center;
		font-size: 30px;
		font-family: "Shadows Into Light", cursive;
		caret-color: white;
		color: white;
		&::placeholder {
			padding-left: 10px;
			color: white;
			font-family: "Shadows Into Light", cursive;
		}
	}
`;

const TimerContainer = styled.div`
	position: absolute;
	top: 0;
	margin: 50px auto;
	width: 300px;
	height: 15px;
	background-color: black;
	border: 2px solid silver;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
`;

const ProgressSquare = styled.div`
	width: 30px;
	height: 100%;
	background-color: ${props => props.color};
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
