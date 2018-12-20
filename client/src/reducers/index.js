import { combineReducers, } from 'redux';
import categories from './categories';
import cards from './cards';

const rootReducer = combineReducers({
  categories,
  cards
});

export default rootReducer;