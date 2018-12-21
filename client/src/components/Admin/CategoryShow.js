import React from 'react'
import { connect } from 'react-redux'
// import {
//   deleteCategory,
//   updateCategory,
// } from '../../reducers/categories';   
// import {getCards, deleteCard, addCard, updateCard} from "../../reducers/cards"; 
// import styled from 'styled-components';
// import Category from './Category';
import NewCardForm from './NewCardForm';
import AdminNavBar from './AdminNavBar';

class CategoryShow extends React.Component {

    state = {
        cards: []
    }

    componentDidMount() {
        // const {dispatch} = this.props;
        // const {id} = this.props.match.params;
    }
    
    render() {
        return(
            <>
                <AdminNavBar categoryButtons={false}/>
                <NewCardForm />
            </>
        )
    }
}


const mapStateToProps = (state, props) => {
    const id = parseInt(props.match.params.id);
    return { cards: state.cards.filter(card => card.category_id === id),  category: state.categories.filter(c => c.id === id)}
}

export default connect(mapStateToProps)(CategoryShow);