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
import StartingScreen from './StartingScreen';
import themeSong from "../../assets/theme-song.mp3";

class Jeopardy extends React.Component {
	state = {
		money: 0,
		playerName: "Daniel",
		showStart: true
	};

	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(getCategories(this.getCards));
  }
  
  updatePlayerName = name => {
    this.setState({
      playerName: name
    })
  }

  closeStartScreen = () => {
    this.setState({
      showStart: false
    })
  }

	getCards = () => {
		const { dispatch } = this.props;
		dispatch(getCards());
	};

	handleClick = index => {
		// let {cards, categories} = this.props
		// console.log(index);
		// let playedCard = cards.filter(card => card.id === index)
		// let category = categories.filter(cat => cat.id === playedCard[0].category_id);
		// console.log(playedCard[0].question);
		// console.log(playedCard[0].answer);
		// console.log(category[0].name);
	};

	render() {
		let { money, showStart } = this.state;
    let { categories, cards } = this.props;
    let theme = new Audio(themeSong);

		return (
			<>
        <StartingScreen 
          show={showStart} 
          update={this.updatePlayerName}
          close={this.closeStartScreen}
          song={theme}
        />
				<GameContainer>
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
								{cards.map(card => {
									if (card.category_id === categories[0].id) {
										return (
											<li
												className="card"
												key={card.id}
												onClick={() =>
													this.handleClick(card.id)
												}
											>
												${card.dollar_value}
											</li>
										);
									} else return null;
								})}
							</ul>
							<ul>
								{cards.map(card => {
									if (card.category_id === categories[1].id) {
										return (
											<li
												className="card"
												key={card.id}
												onClick={() =>
													this.handleClick(card.id)
												}
											>
												${card.dollar_value}
											</li>
										);
									} else return null;
								})}
							</ul>
							<ul>
								{cards.map(card => {
									if (card.category_id === categories[2].id) {
										return (
											<li
												className="card"
												key={card.id}
												onClick={() =>
													this.handleClick(card.id)
												}
											>
												${card.dollar_value}
											</li>
										);
									} else return null;
								})}
							</ul>
							<ul>
								{cards.map(card => {
									if (card.category_id === categories[3].id) {
										return (
											<li
												className="card"
												key={card.id}
												onClick={() =>
													this.handleClick(card.id)
												}
											>
												${card.dollar_value}
											</li>
										);
									} else return null;
								})}
							</ul>
							<ul>
								{cards.map(card => {
									if (card.category_id === categories[4].id) {
										return (
											<li
												className="card"
												key={card.id}
												onClick={() =>
													this.handleClick(card.id)
												}
											>
												${card.dollar_value}
											</li>
										);
									} else return null;
								})}
							</ul>
							<ul>
								{cards.map(card => {
									if (card.category_id === categories[5].id) {
										return (
											<li
												className="card"
												key={card.id}
												onClick={() =>
													this.handleClick(card.id)
												}
											>
												${card.dollar_value}
											</li>
										);
									} else return null;
								})}
							</ul>
						</ChoicesContainer>
					</GameBoard>
					<ScoreBoard>
						<NameContainer>{this.state.playerName}</NameContainer>
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
