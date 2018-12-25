import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import alex from "../../assets/Alex.png";
import themeSong from "../../assets/theme-song.mp3";

class StartingScreen extends React.Component {
	state = {
		name: ""
	};

	handleChange = ({ target: { name, value } }) => {
		this.setState({
			[name]: value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
	};

	componentDidMount() {
		// Play Theme Song on Component Mount
		let audio = new Audio(themeSong);
		// audio.play();
	}

	render() {
		let { name } = this.state;
		let { show } = this.props;
		return (
			<>
				{show ? (
					<ScreenContainer>
						<img src={logo} alt="game-logo" />
						<form>
							<input
								value={name}
								name="name"
								autoFocus
								required
								onChange={this.handleChange}
								placeholder="What is your name?"
							/>
							<input type="submit" value="Start Game" />
						</form>
						<img
							src={alex}
							alt="trebeck-himself"
							className="alex"
						/>
					</ScreenContainer>
				) : null}
			</>
		);
	}
}

const ScreenContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: linear-gradient(to bottom left, #4776e6, #8e54e9);

	.alex {
		position: absolute;
		bottom: 0;
		left: 0;
	}

	form {
		margin: 0 auto;
		input:first-child {
			width: 300px;
			padding: 20px;
			font-size: 18px;
		}
	}
`;

export default StartingScreen;
