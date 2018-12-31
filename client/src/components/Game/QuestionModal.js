import React from "react";
import styled from "styled-components";

class QuestionModal extends React.Component {
	state = {
		timer: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    };
    
    componentDidUpdate() {
        console.log(this.state.timer);
    }

	componentDidMount() {
		this.startTimer();
	}

	startTimer = () => {
		let { timer } = this.state;
		let countDown = setInterval(() => {
			if (timer.length > 0) {
				timer.pop();
				this.setState({
					timer: timer
				});
			} else clearInterval(countDown);
		}, 1000);
	};
	
	renderItems = (color) => {
		return this.state.timer.map((item) => (
			<ProgressSquare color={color} key={item}/>
		));
	}

	render() {
		let { question } = this.props;
        let { timer } = this.state;
        let color;
        if(timer.length > 7) {
            color = "green";
        } else if (timer.length > 4) {
            color = "yellow";
        } else {        
            color = "red";
        }
        
		return (
			<ModalContainer>
				<TimerContainer>
                    {this.renderItems(color)}
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
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.4);
`;

const ProgressSquare = styled.div`
    width: 20px;
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
