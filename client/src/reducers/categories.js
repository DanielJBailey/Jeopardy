import axios from 'axios';

const CATEGORIES = "CATEGORIES";
const ADD_CAT = "ADD_CATEGORY";
const UPDATE_CAT = "UPDATE_CATEGORY";
const DELETE_CAT = "DELETE_CATEGORY";

// REDUX ACTIONS

export const getCategories = () => {
    return (dispatch) => {
        axios.get(`/api/categories`)
        .then(res => dispatch({ type: CATEGORIES, categories: res.data }))
    }
}

export const addCategory = (category) => {
    return (dispatch) => {
        axios.post(`/api/categories`, {category})
        .then(res => dispatch({ type: ADD_CAT, category: res.data}))
    }
}

export const updateCategory = (category) => {
    return (dispatch) => {
        axios.put(`/api/categories/${category.id}`, { category })
        .then(res => dispatch({ type: UPDATE_CAT, category: res.data}))
    }
}

export const deleteCategory = (id) => {
    return (dispatch) => {
        axios.delete(`/api/categories/${id}`)
        .then( () => dispatch({ type: DELETE_CAT, id }))
    }
}

// REDUX REDUCER

export default (state = [], action ) => {
    switch(action.type) {
        case CATEGORIES:
            return action.categories
        case ADD_CAT:
            return [action.category, ...state]
        case UPDATE_CAT:
            return state.map(category => {
                if(category.id === action.category.id)
                    return action.category
                return category
            })
        case DELETE_CAT:
            return state.filter( c => c.id !== action.id )
        default: return state;
    }
}