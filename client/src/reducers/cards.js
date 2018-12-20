import axios from 'axios';

const CARDS = "CARDS";
const ADD_CARD = "ADD_CARD";
const UPDATE_CARD = "UPDATE_CARD";
const DELETE_CARD = "DELETE_CARD";

//Redux Actions

export const getCards = (category_id) => {
    return (dispatch) => {
        axios.get(`/api/categories/${category_id}/cards`)
        .then(res=> dispatch({type: CARDS, cards: res.data}))
    }
}

export const addCard = (category_id) => {
    return (dispatch) => {
        axios.post(`/api/categories/${category_id}/cards`)
        .then(res => dispatch({type: ADD_CARD, card: res.data}))
    }
}

export const updateCard = (category_id, card) => {
    return (dispatch) => {
        axios.put(`/api/categories/${category_id}/cards`, {card})
        .then(res => dispatch({type: UPDATE_CARD, card: res.data}))
    }
}

export const deleteCard = (category_id, id) => {
    return (dispatch) => {
        axios.delete(`/api/categories/${category_id}/cards/${id}`)
        .then(() => dispatch({type: DELETE_CARD, id}))
    }
}

// REDUX REDUCER

export default (state=[], action) => {
    switch(action.type) {
        case CARDS:
            return action.cards
        case ADD_CARD:
            return [action.card, ...state]
        case UPDATE_CARD:
            return state.map(card => {
                if(card.id === action.card.id)
                    return action.card
                return card
            })
        case DELETE_CARD:
            return state.filter(c => c.id !== action.id)
        default: return state;
    }
}