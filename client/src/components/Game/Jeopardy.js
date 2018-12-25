import React from 'react'
import logo from '../../assets/logo.png'
import { getCategories } from '../../reducers/categories'
import { connect } from 'react-redux'
import axios from 'axios'
import {
  Category,
  CategoriesContainer,
  GameBoard,
  GameContainer,
  ChoicesContainer,
  NameContainer,
  ScoreBoard,
  MoneyContainer
} from './BoardStyles'

class Jeopardy extends React.Component {
  state = {
    money: 0,
    cards: [],
    playerName: 'Daniel',
    renderCards: false
  }

  componentDidMount () {
    const { dispatch } = this.props
    dispatch(getCategories(this.getCards))
  }

  getCards = () => {
    const { categories } = this.props
    const { cards } = this.state
    let allCards = []
    for (var i in categories) {
      axios.get(`/api/categories/${categories[i].id}/cards`).then(res => {
        for (var i = 0; i < res.data.length; i++) {
          allCards.push(res.data[i])
        }
      })
    }
    this.setState({
      cards: allCards,
      renderCards: true
    })
  }

  populateCards = index => {
    let { cards } = this.state
    console.log(cards.slice(index))
    cards.slice(index).map(card => {
      return <li key={card.id}>{card.dollar_value}</li>
    })
  }

  render () {
    let { money } = this.state
    let { categories } = this.props
    let { renderCards } = this.state

    return (
      <GameContainer>
        <img src={logo} alt='game-logo' className='logo' />
        <GameBoard>
          <CategoriesContainer>
            {categories.map(cat => (
              <Category key={cat.id}>{cat.name.toUpperCase()}</Category>
            ))}
          </CategoriesContainer>
          {renderCards ? (
            <ChoicesContainer>
              <ul>{this.populateCards(0, 4)}</ul>
            </ChoicesContainer>
          ) : null}
        </GameBoard>
        <ScoreBoard>
          <NameContainer>{this.state.playerName}</NameContainer>
          <MoneyContainer>${money}</MoneyContainer>
        </ScoreBoard>
      </GameContainer>
    )
  }
}

const mapStateToProps = state => {
  return { categories: state.categories, cards: state.cards }
}

export default connect(mapStateToProps)(Jeopardy)
