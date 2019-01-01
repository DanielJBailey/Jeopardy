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
import QuestionModal from "../Game/QuestionModal";

class Jeopardy extends React.Component {
	state = {
		money: 0,
		playerName: undefined,
		showStart: true,
		gameStarted: false,
		cardsInPlay: [],
		question: "",
		answer: "",
		dollar_value: undefined,
		accepted_answers: undefined,
		showModal: false
	};

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(getCategories(this.getCards));
	}

	increaseBalance = amount => {
		let { money } = this.state;
		this.setState({
			money: money + amount
		});
	};

	decreaseBalance = amount => {
		let { money } = this.state;
		this.setState({
			money: money - amount
		});
	};

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
		return cardsInPlay.length === 0
			? this.setState({ cardsInPlay: cards })
			: null;
	};

	handleClick = (card, index) => {
		let { cardsInPlay } = this.state;
		let cardIndex = cardsInPlay.findIndex(card => card.id === index);
		let cardInPlay = cardsInPlay[cardIndex];
		if (cardInPlay.dollar_value !== 0) {
			this.setState({
				question: card.question,
				answer: card.answer,
				dollar_value: card.dollar_value,
				accepted_answers: card.accepted_answers
			});
			cardsInPlay[cardIndex].dollar_value = 0;
			this.setState({
				cardsInPlay: cardsInPlay,
				showModal: true
			});
		}
	};

	closeQuestion = () => {
		let { showModal } = this.state;
		this.setState({
			showModal: !showModal
		});
	};

	render() {
		let {
			money,
			showStart,
			playerName,
			cardsInPlay,
			showModal,
			question,
			answer,
			accepted_answers,
			dollar_value
		} = this.state;
		money = money.toLocaleString();
		let { categories } = this.props;
		return (
			<>
				{showStart ? (
					<StartingScreen
						show={showStart}
						update={this.updatePlayerName}
						close={this.closeStartScreen}
					/>
				) : null}

				<GameContainer>
					{showModal ? (
						<QuestionModal
							question={question}
							answer={answer}
							value={dollar_value}
							accepted_answers={accepted_answers}
							close={this.closeQuestion}
							increase={this.increaseBalance}
							decrease={this.decreaseBalance}
						/>
					) : null}

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
														card,
														card.id
													)
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
													this.handleClick(
														card,
														card.id
													)
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
													this.handleClick(
														card,
														card.id
													)
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
													this.handleClick(
														card,
														card.id
													)
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
													this.handleClick(
														card,
														card.id
													)
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
													this.handleClick(
														card,
														card.id
													)
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
					<ScoreBoard>
						<NameContainer>{playerName}</NameContainer>
						<MoneyContainer color={money < 0 ? 'red' : '#060CE9'}>${money}</MoneyContainer>
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
