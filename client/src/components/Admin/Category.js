import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import EditCategory from './EditCategory';

const Category = ({id, name, deleting, editing, remove, edit}) => (
    <Container>
        {editing ? 
        <>
            <EditCategory id={id} name={name} edit={edit} />
        </>
        :
        <>
            {name}
            {deleting ? 
                <DeleteButton onClick={() => remove(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm415.2 56.7L394.8 467c-1.6 25.3-22.6 45-47.9 45H101.1c-25.3 0-46.3-19.7-47.9-45L32.8 140.7c-.4-6.9 5.1-12.7 12-12.7h358.5c6.8 0 12.3 5.8 11.9 12.7z"/></svg>
                </DeleteButton>
            : null}
            <Link to ={`/admin/category/${id}`}>View</Link>
        </>
        
        }
        
    </Container>
)

const DeleteButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    padding: 10px;
    svg {
        width: 20px;
        height: 20px;
        fill: black;
    }
    &:hover > svg {
        fill: white;
    }
`;

const Container = styled.div`
    background-color: #3867d6;
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
    text-shadow: 2px 1px 1px rgba(0,0,0,1);
    box-shadow: 2px 2px 10px rgba(0,0,0,0.7);
    color: white;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    position: relative;
    &:hover {
        background-color: #4b7bec;
    }

    a {
        position: absolute;
        bottom: 0;
        right: 0;
        text-decoration: none;
        text-shadow: none;
        padding: 10px 15px;
        background-color: transparent;
        font-size: 12px;
        margin-top: 10px;
        color: black;
        &:hover {
            color: white;
            background-color: #3867d6;
        }
    }
`;


export default Category;