import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import alex from "../../assets/Alex.png";
import theme from "../../assets/theme-song.mp3";

class StartingScreen extends React.Component {
	state = {
		name: "",
		play: true
	};

	handleChange = ({ target: { name, value } }) => {
		this.setState({
			[name]: value
		});
	};

	handleSubmit = e => {
		let { update, close } = this.props;
		e.preventDefault();
		update(this.state.name);
		close();
		this.setState({
			playing: false
		})
	};

	render() {
		let { name, playing } = this.state;
		let { show } = this.props;
		return (
			<>
				{playing ? <audio autoPlay src={theme} /> : null}
				{show ? (
					<ScreenContainer>
						<img src={logo} alt="game-logo" />
						<form onSubmit={this.handleSubmit}>
							<input
								value={name}
								name="name"
								autoFocus
								required
								onChange={this.handleChange}
								placeholder="What is your name?"
							/>
							<input
								type="submit"
								value="Start Game"
								className="submit"
							/>
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
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		background: #2d3436;
		border-radius: 10px;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
		input:first-child {
			width: 300px;
			height: 75px;
			font-size: 25px;
			border-top-left-radius: 10px;
			border-bottom-left-radius: 10px;
			outline: none;
			border: none;
			background: linear-gradient(
				to top,
				#4a69bd,
				#1e3799,
				#1e3799,
				#4a69bd
			);
			font-family: "Shadows Into Light", cursive;
			color: white;
			text-align: center;
			&::placeholder {
				padding-left: 10px;
				color: white;
			}
		}
		.submit {
			-webkit-appearance: button;
			width: 200px;
			height: 75px;
			border: none;
			border-top-right-radius: 10px;
			border-bottom-right-radius: 10px;
			cursor: pointer;
			outline: none;
			font-size: 25px;
			font-weight: bold;
			color: white;
			background-color: #2d3436;
		}
	}
`;

export default StartingScreen;
