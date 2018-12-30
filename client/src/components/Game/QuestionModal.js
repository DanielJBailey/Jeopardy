import React from "react";
import styled from "styled-components";

class QuestionModal extends React.Component {
	state = {
		timer: 10
    };
    
    componentDidUpdate() {
        console.log(this.state.timer);
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

    renderSquares = (color) => {
        let {timer} = this.state;
        for(var i = 0; i < timer; i++) {
            return <ProgressSquare color={color}/>
        }
    }

	render() {
		let { question, answer } = this.props;
        let { timer } = this.state;
        let color;
        if(timer > 7) {
            color = "green";
        } else if (timer > 4) {
            color = "yellow";
        } else {        
            color = "red";
        }
        
		return (
			<ModalContainer>
				<TimerContainer>
                    {this.renderSquares(color)}
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
	height: 15px;
    background-color: black;
    border: 2px solid silver;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.4);
`;

const ProgressSquare = styled.div`
    width: 30px;
    height: 100%;
    background-color: ${props => props.color}; 
    border-right: 2px solid silver;
    &:last-child {
        border-right: none;
    }
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
