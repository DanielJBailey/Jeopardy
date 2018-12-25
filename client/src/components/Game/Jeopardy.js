import React from 'react'
import logo from '../../assets/logo.png'
import { getCategories } from '../../reducers/categories'
import { getCards } from '../../reducers/cards'
import { connect } from 'react-redux'
import styled from 'styled-components'

class Jeopardy extends React.Component {
  state = {
    money: 0,
    playerName: 'Daniel'
  }

  componentWillMount () {
    const { dispatch } = this.props
    dispatch(getCategories(this.getCards))
  }

  getCards = () => {
    const { dispatch } = this.props
    dispatch(getCards())
  }

  render () {
    let { money } = this.state
    let { categories, cards } = this.props

    return (
      <GameContainer>
        {/* <img src={logo} alt='game-logo' className='logo' /> */}
        <GameBoard>
          <CategoriesContainer>
            <ul />
            {categories.map(cat => (
              <Category key={cat.id}>{cat.name.toUpperCase()}</Category>
            ))}
          </CategoriesContainer>
          <ChoicesContainer>
            <ul>
              {cards.map(card => {
                if (card.category_id === categories[0].id) {
                  return (
                    <li className='card' key={card.id}>
                      ${card.dollar_value}
                    </li>
                  )
                } else return null
              })}
            </ul>
            <ul>
              {cards.map(card => {
                if (card.category_id === categories[1].id) {
                  return (
                    <li className='card' key={card.id}>
                      ${card.dollar_value}
                    </li>
                  )
                } else return null
              })}
            </ul>
            <ul>
              {cards.map(card => {
                if (card.category_id === categories[2].id) {
                  return (
                    <li className='card' key={card.id}>
                      ${card.dollar_value}
                    </li>
                  )
                } else return null
              })}
            </ul>
            <ul>
              {cards.map(card => {
                if (card.category_id === categories[3].id) {
                  return (
                    <li className='card' key={card.id}>
                      ${card.dollar_value}
                    </li>
                  )
                } else return null
              })}
            </ul>
            <ul>
              {cards.map(card => {
                if (card.category_id === categories[4].id) {
                  return (
                    <li className='card' key={card.id}>
                      ${card.dollar_value}
                    </li>
                  )
                } else return null
              })}
            </ul>
            <ul>
              {cards.map(card => {
                if (card.category_id === categories[5].id) {
                  return (
                    <li className='card' key={card.id}>
                      ${card.dollar_value}
                    </li>
                  )
                } else return null
              })}
            </ul>
          </ChoicesContainer>
        </GameBoard>
        <ScoreBoard>
          <NameContainer>{this.state.playerName}</NameContainer>
          <MoneyContainer>${money}</MoneyContainer>
        </ScoreBoard>
      </GameContainer>
    )
  }
}

const MoneyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(to top, #4a69bd, #1e3799, #1e3799, #4a69bd);
  align-items: center;
  width: 50%;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 45px;
  color: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`

const ScoreBoard = styled.div`
  height: 100px;
  width: 600px;
  background-color: #3b3131;
  box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 0.3),
    3px 5px 20px rgba(0, 0, 0, 0.3);
  position: absolute;
  padding: 5px;
  top: 0;
  right: 0;
  display: flex;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`

const NameContainer = styled.div`
  width: 50%;
  height: 100%;
  margin-right: 10px;
  background-color: #1e3799;
  background: linear-gradient(to top, #4a69bd, #1e3799, #1e3799, #4a69bd);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  align-items: center;
  font-family: 'Shadows Into Light', cursive;
  color: white;
  font-size: 45px;
`

const ChoicesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;

  ul {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
    margin: 0 5px;
    &:first-child {
      margin: 0 5px 0 0;
    }
    &:last-child {
      margin: 0 0 0 5px;
    }
    .card {
      display: block;
      background-color: #0c2461;
      font-family: 'Roboto', sans-serif;
      font-size: 40px;
      color: yellow;
      font-weight: bold;
      flex: 1;
      min-height: 100px;
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
`

const GameContainer = styled.div`
  height: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background: linear-gradient(to bottom left, #4776e6, #8e54e9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    max-width: 300px;
    margin-bottom: 20px;
  }
`

const GameBoard = styled.div`
  width: 75vw;
  height: auto;
  background-color: black;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
  border: 10px solid black;
  border-radius: 5px;
`

const CategoriesContainer = styled.div`
  display: flex;
  border-bottom: 15px solid black;
  font-family: 'Roboto', sans-serif;
`

const Category = styled.div`
  background-color: #0c2461;
  flex: 1;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  margin-right: 10px;
  font-size: 22px;
  color: white;
  box-shadow: inset -5px -5px 10px rgba(0, 0, 0, 0.7), inset 5px 5px 5px #1e3799;
  &:last-child {
      margin-right: 0;
  }
`

const mapStateToProps = state => {
  return { categories: state.categories, cards: state.cards }
}

export default connect(mapStateToProps)(Jeopardy)
