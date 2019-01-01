import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

const GameOver = ({playerName, balance, reset}) => (
    <GameOverContainer>
        <GameOverHeader>Thanks for playing {playerName}!</GameOverHeader>
        <img src={logo} alt="game-logo"/>
        <Balance>Your ending balance is ${balance}</Balance>
        <button onClick={reset}>Play Again</button>
    </GameOverContainer>
)

const GameOverContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to bottom left, #4776e6, #8e54e9);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;

    img {
        max-width: 500px;
    }

    button {
        -webkit-appearance: button;
        width: 150px;
        height: 50px;
        background-color: transparent;
        font-size: 16px;
        border: 3px solid white;
        color: white;
        cursor: pointer;
        font-weight: bold;
        &:hover {
            background-color: white;
            color: black;
        }
    }
`;

const GameOverHeader = styled.h1`
    font-size: 35px;
    color: white;
    font-family: 'Open Sans', sans-serif;
`;

const Balance = styled.h1`
    font-size: 30px;
    color: white;
    font-family: 'Open Sans', sans-serif;
    margin-bottom: 25px;
`;

export default GameOver;