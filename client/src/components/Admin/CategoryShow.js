import React from 'react'
import { connect } from 'react-redux' 
import {getCards} from "../../reducers/cards"; 
import styled from 'styled-components';
import NewCardForm from './NewCardForm';
import AdminNavBar from './AdminNavBar';

class CategoryShow extends React.Component {

    componentDidMount() {
        let {id} = this.props.match.params;
        const {dispatch} = this.props;
        dispatch(getCards(id))
    }
    
    render() {
        let categoryName = this.props.category[0].name.toUpperCase();
        let {id} = this.props.match.params;
        let {cards} = this.props;
        return(
            <AdminContainer>
                <h1>{categoryName}</h1>
                <AdminNavBar categoryButtons={false}/>
                <NewCardForm id={id} cards={cards}/>
            </AdminContainer>
        )
    }
}

const AdminContainer = styled.div`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 100px;

    h1 {
        margin-bottom: 20px;
        color: white;
    }
`;


const mapStateToProps = (state, props) => {
    const id = parseInt(props.match.params.id);
    return { cards: state.cards.filter(card => card.category_id === id),  category: state.categories.filter(c => c.id === id)}
}

export default connect(mapStateToProps)(CategoryShow);