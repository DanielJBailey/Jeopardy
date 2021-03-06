import styled from 'styled-components';

export const MoneyContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: ${props => props.color};
	align-items: center;
	flex: 1;
	font-family: "Roboto", sans-serif;
	font-weight: 900;
	font-size: 40px;
	color: white;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
`;

export const ScoreBoard = styled.div`
	padding: 20px 0;
	width: 600px;
	background-color: #3b3131;
	box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 0.3),
		3px 5px 20px rgba(0, 0, 0, 0.3);
	padding: 5px;
	display: flex;
	border-radius: 5px;
	margin-top: 50px;
`;

export const NameContainer = styled.div`
	width: auto;
	padding: 0 50px;
	height: 100%;
	margin-right: 10px;
	background-color: #1e3799;
	background: #060CE9;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	align-items: center;
	font-family: "Shadows Into Light", cursive;
	color: white;
	font-size: 40px;
`;

export const ChoicesContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	max-height: 100vh;
	width: 100%;

	ul {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		/* align-items: center; */
		list-style: none;
		margin: 0 5px;
		&:first-child {
			margin: 0 5px 0 0;
		}
		&:last-child {
			margin: 0 0 0 5px;
		}
		.card {
			display: flex;
			background-color: #0c2461;
			font-family: "Roboto", sans-serif;
			font-size: 5vmin;
			min-height: 75px;
			color: yellow;
			font-weight: bold;
			width: 100%;
			box-shadow: inset -5px -5px 10px rgba(0, 0, 0, 0.7),
				inset 5px 5px 5px #1e3799;
			display: flex;
			flex-direction: column;
			cursor: pointer;
			justify-content: center;
			align-items: center;
			margin-bottom: 10px;
			&:hover {
				background-color: #1e3799;
			}
			&:last-child {
				margin-bottom: 0px;
			}
		}
	}
`;

export const GameContainer = styled.div`
	height: 100%;
	width: 100vw;
	min-height: 100vh;
	background: linear-gradient(to bottom left, #4776e6, #8e54e9);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 100px;
	position: fixed;
	top: 0;
	left: 0;
`;

export const GameBoard = styled.div`
	width: 100%;
	max-width: 75vw;
	height: auto;
	background-color: black;
	box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
	border: 10px solid black;
	border-radius: 5px;
`;

export const CategoriesContainer = styled.div`
	display: flex;
	border-bottom: 15px solid black;
	font-family: "Roboto", sans-serif;
`;

export const Category = styled.div`
	background-color: #0c2461;
	flex: 1;
	height: 100px;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-weight: bold;
	margin-right: 10px;
	font-size: 22px;
	color: white;
	box-shadow: inset -5px -5px 10px rgba(0, 0, 0, 0.7),
		inset 5px 5px 5px #1e3799;
	&:last-child {
		margin-right: 0;
	}
`;