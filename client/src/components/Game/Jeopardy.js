import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'

const Jeopardy = () => (
  <GameContainer>
    <img src={logo} alt='game-logo' className='logo' />
    <GameBoard>
      <CategoriesContainer>
        <Category>THE BIBLE</Category>
        <Category>SCIENCE & NATURE</Category>
        <Category>SPORTS</Category>
        <Category>U.S. CITIES</Category>
        <Category>U.S. HISTORY</Category>
        <Category>FOOD & DRINK</Category>
      </CategoriesContainer>
      <ChoicesContainer>
        <ul>
          <li>$200</li>
          <li>$400</li>
          <li>$600</li>
          <li>$800</li>
          <li>$1000</li>
        </ul>
        <ul>
          <li>$200</li>
          <li>$400</li>
          <li>$600</li>
          <li>$800</li>
          <li>$1000</li>
        </ul>
        <ul>
          <li>$200</li>
          <li>$400</li>
          <li>$600</li>
          <li>$800</li>
          <li>$1000</li>
        </ul>
        <ul>
          <li>$200</li>
          <li>$400</li>
          <li>$600</li>
          <li>$800</li>
          <li>$1000</li>
        </ul>
        <ul>
          <li>$200</li>
          <li>$400</li>
          <li>$600</li>
          <li>$800</li>
          <li>$1000</li>
        </ul>
        <ul>
          <li>$200</li>
          <li>$400</li>
          <li>$600</li>
          <li>$800</li>
          <li>$1000</li>
        </ul>
      </ChoicesContainer>
    </GameBoard>
    <ScoreBoard>
        <NameContainer>
            Daniel
        </NameContainer>
        <MoneyContainer>
            $1000
        </MoneyContainer>
    </ScoreBoard>
  </GameContainer>
)

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
`;

const ScoreBoard = styled.div`
    height: 100px;
    width: 600px;
    background-color: #3B3131;
    box-shadow: inset 4px 4px 10px rgba(0,0,0,0.3), 3px 5px 20px rgba(0,0,0,0.3);
    position: absolute;
    padding: 5px;
    top: 0;
    right: 0;
    display: flex;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

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
`;

const ChoicesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;

  ul {
    height: 100%;
    flex: 1;
    list-style: none;
    margin: 0 5px;
    &:first-child {
      margin: 0 5px 0 0;
    }
    &:last-child {
      margin: 0 0 0 5px;
    }
    li {
      display: block;
      background-color: #0c2461;
      font-family: 'Roboto', sans-serif;
      font-size: 50px;
      color: yellow;
      font-weight: bold;
      height: 100px;
      box-shadow: inset -5px -5px 10px rgba(0,0,0,0.7), inset 5px 5px 5px #1e3799;
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
  box-shadow: inset 5px 5px 5px rgba(255,255,255,0.2), 5px 5px 20px rgba(0, 0, 0, 0.4);
  border: 10px solid black;
  border-radius: 5px;
`

const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  border-bottom: 15px solid black;
  font-family: 'Roboto', sans-serif;
`

const Category = styled.div`
  background-color: #0c2461;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 22px;
  color: white;
  padding: 10px;
  box-shadow: inset -5px -5px 10px rgba(0,0,0,0.7), inset 5px 5px 5px #1e3799;
`

export default Jeopardy
