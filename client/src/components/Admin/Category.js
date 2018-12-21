import React from 'react';
import styled from 'styled-components';

const Category = ({name}) => (
    <Container>
        {name}
    </Container>
)

const Container = styled.div`
    padding: 50px;
    background-color: #3867d6;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
    text-shadow: 2px 1px 1px rgba(0,0,0,1);
    box-shadow: 2px 2px 10px rgba(0,0,0,0.7);
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    &:hover {
        background-color: #4b7bec;
    }
`;


export default Category;