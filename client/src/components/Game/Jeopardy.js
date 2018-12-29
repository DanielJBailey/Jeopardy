import React from "react";
import { getCategories } from "../../reducers/categories";
import { getCards } from "../../reducers/cards";
import { connect } from "react-redux";
import {
	GameBoard,
	GameContainer,
	Category,
	CategoriesContainer,
	ChoicesContainer
	// ScoreBoard,
	// MoneyContainer,
	// NameContainer
} from "./BoardStyles";
import StartingScreen from "./StartingScreen";
import start_game from "../../assets/game_start.mp3";

class Jeopardy extends React.Component {
	state = {
		money: 0,
		playerName: undefined,
		showStart: true,
		gameStarted: false,
		cardsInPlay: []
	};

	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(getCategories(this.getCards));
	}

	getCards = () => {
		const { dispatch } = this.props;
		dispatch(getCards(this.updateCardsInPlay));
		this.setState({
			gameStarted: true
		});
	};

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

	updateCardsInPlay = () => {
		let { cards } = this.props;
		let { cardsInPlay } = this.state;
		if (cardsInPlay.length === 0) {
			this.setState({ cardsInPlay: cards }, () => {
				cardsInPlay.map(
					card => (card.initialValue = card.dollar_value)
				);
			});
		}
	};

	handleClick = index => {
		let { cardsInPlay } = this.state;
		let cardIndex = cardsInPlay.findIndex(card => card.id === index);
		let cardInPlay = { ...this.state.cardsInPlay[cardIndex] };
		cardInPlay.dollar_value = 0;
		this.setState(
			{ cardsInPlay: cardsInPlay.filter(c => c.id !== index) },
			() => this.addUpdatedCardBack(cardInPlay)
		);
	};

	addUpdatedCardBack = card => {
		let { cardsInPlay } = this.state;
		let AllCards = [...cardsInPlay, card];
		AllCards = AllCards.sort((a, b) => b.dollar_value - a.dollar_value);
		this.setState({
			cardsInPlay: AllCards
		});
	};

	render() {
		let { money, showStart, playerName, cardsInPlay } = this.state;
		let { categories } = this.props;
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
													this.handleClick(card.id)
												}
											>
												{card.dollar_value !== 0
													? `$${card.dollar_value}`
													: null}
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
													this.handleClick(card.id)
												}
											>
												{card.dollar_value !== 0
													? `$${card.dollar_value}`
													: null}
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
													this.handleClick(card.id)
												}
											>
												{card.dollar_value !== 0
													? `$${card.dollar_value}`
													: null}
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
													this.handleClick(card.id)
												}
											>
												{card.dollar_value !== 0
													? `$${card.dollar_value}`
													: null}
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
													this.handleClick(card.id)
												}
											>
												{card.dollar_value !== 0
													? `$${card.dollar_value}`
													: null}
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
													this.handleClick(card.id)
												}
											>
												{card.dollar_value !== 0
													? `$${card.dollar_value}`
													: null}
											</li>
										);
									} else return null;
								})}
							</ul>
						</ChoicesContainer>
					</GameBoard>
					{/* <ScoreBoard>
						<NameContainer>{playerName}</NameContainer>
						<MoneyContainer>${money}</MoneyContainer>
					</ScoreBoard> */}
				</GameContainer>
			</>
		);
	}
}

const mapStateToProps = state => {
	return { categories: state.categories, cards: state.cards };
};

export default connect(mapStateToProps)(Jeopardy);
