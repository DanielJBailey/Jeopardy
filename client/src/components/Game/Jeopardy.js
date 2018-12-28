import React from "react";
import { getCategories } from "../../reducers/categories";
import { getCards } from "../../reducers/cards";
import { connect } from "react-redux";
import {
	GameBoard,
	GameContainer,
	Category,
	CategoriesContainer,
	ChoicesContainer,
	ScoreBoard,
	MoneyContainer,
	NameContainer
} from "./BoardStyles";
import StartingScreen from "./StartingScreen";
import start_game from "../../assets/game_start.mp3";

class Jeopardy extends React.Component {
	state = {
		money: 0,
		playerName: undefined,
		showStart: false,
		gameStarted: false,
		cardsInPlay: []
	};

	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(getCategories(this.getCards));
	}

	componentDidUpdate() {
		console.log(this.state.cardsInPlay);
	}

	updatePlayerName = name => {
		this.setState({
			playerName: name
		});
	};

	closeStartScreen = () => {
		this.setState({
			showStart: false
		});
	};

	getCards = () => {
		const { dispatch } = this.props;
		dispatch(getCards(this.updateCardsInPlay));
		this.setState({
			gameStarted: true
		});
	};

	updateCardsInPlay = () => {
		let { cards } = this.props;
		this.setState({
			cardsInPlay: cards
		});
	};

	handleClick = (index) => {
		let {cardsInPlay} = this.state;
		// let playedCard = cardsInPlay.filter(card => card.id === index);
		// playedCard = playedCard[0];
		let cardIndex = cardsInPlay.findIndex(card => card.id === index)
		let cardInPlay = {...this.state.cardsInPlay[cardIndex]};
		cardInPlay.dollar_value = 0;
		this.setState({
			cardsInPlay: cardsInPlay.filter(c => c.id !== index)
		}, () => {
			this.addUpdatedCardBack(cardInPlay);
		})
	};

	addUpdatedCardBack = (updatedCard) => {
		let {cardsInPlay} = this.state;
		this.setState({
			cardsInPlay: [...cardsInPlay, updatedCard]
		}, () => console.log(cardsInPlay))
	}

	render() {
		let { money, showStart, playerName, cardsInPlay} = this.state;
		let { categories} = this.props;
		// SORT CARDS BY DOLLAR VALUE

		return (
			<>
				<StartingScreen
					show={showStart}
					update={this.updatePlayerName}
					close={this.closeStartScreen}
				/>
				<GameContainer>
					{playerName === undefined ? null : (
						<audio autoPlay src={start_game} />
					)}
					<GameBoard>
						<CategoriesContainer>
							<ul />
							{categories.map(cat => (
								<Category key={cat.id}>
									{cat.name.toUpperCase()}
								</Category>
							))}
						</CategoriesContainer>
						<ChoicesContainer>
							<ul>
								{cardsInPlay.map(card => {
									if (card.category_id === categories[0].id) {
										return (
											<li
												className="card"
												key={card.id}
												onClick={() =>
													this.handleClick(
														card.id
													)
												}
											>
												{card.dollar_value !== 0 ? `$${card.dollar_value}`: null}
											</li>
										);
									} else return null;
								})}
							</ul>
							<ul>
								{cardsInPlay.map(card => {
									if (card.category_id === categories[1].id) {
										return (
											<li
												className="card"
												key={card.id}
												onClick={() =>
													this.handleClick(
														card.id
													)
												}
											>
												{card.dollar_value !== 0 ? `$${card.dollar_value}`: null}
											</li>
										);
									} else return null;
								})}
							</ul>
							<ul>
								{cardsInPlay.map(card => {
									if (card.category_id === categories[2].id) {
										return (
											<li
												className="card"
												key={card.id}
												onClick={() =>
													this.handleClick(
														card.id
													)
												}
											>
												{card.dollar_value !== 0 ? `$${card.dollar_value}`: null}
											</li>
										);
									} else return null;
								})}
							</ul>
							<ul>
								{cardsInPlay.map(card => {
									if (card.category_id === categories[3].id) {
										return (
											<li
												className="card"
												key={card.id}
												onClick={() =>
													this.handleClick(
														card.id
													)
												}
											>
												{card.dollar_value !== 0 ? `$${card.dollar_value}`: null}
											</li>
										);
									} else return null;
								})}
							</ul>
							<ul>
								{cardsInPlay.map(card => {
									if (card.category_id === categories[4].id) {
										return (
											<li
												className="card"
												key={card.id}
												onClick={() =>
													this.handleClick(
														card.id
													)
												}
											>
												{card.dollar_value !== 0 ? `$${card.dollar_value}`: null}
											</li>
										);
									} else return null;
								})}
							</ul>
							<ul>
								{cardsInPlay.map(card => {
									if (card.category_id === categories[5].id) {
										return (
											<li
												className="card"
												key={card.id}
												onClick={() =>
													this.handleClick(
														card.id
													)
												}
											>
												{card.dollar_value !== 0 ? `$${card.dollar_value}`: null}
											</li>
										);
									} else return null;
								})}
							</ul>
						</ChoicesContainer>
					</GameBoard>
					<ScoreBoard>
						<NameContainer>{playerName}</NameContainer>
						<MoneyContainer>${money}</MoneyContainer>
					</ScoreBoard>
				</GameContainer>
			</>
		);
	}
}

const mapStateToProps = state => {
	return { categories: state.categories, cards: state.cards };
};

export default connect(mapStateToProps)(Jeopardy);
