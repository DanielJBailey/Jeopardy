import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import alex from '../../assets/Alex.png';
import themeSong from '../../assets/theme-song.mp3';


class StartingScreen extends React.Component {

    componentDidMount() {
        // Play Theme Song on Component Mount
        let audio = new Audio(themeSong);
        // audio.play();
    }
    render() {
        
        return(
            <ScreenContainer>
                <h1>Welcome To</h1>
                <img src = {logo} alt ="game-logo" />
                <h3>What is your name?</h3>
                <img src={alex} alt="trebeck-himself" className="alex"/>
            </ScreenContainer>
        )
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
`;


export default StartingScreen;