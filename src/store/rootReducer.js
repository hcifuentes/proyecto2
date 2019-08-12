import { combineReducers } from 'redux';
import charactersReducer from './characters/reducer';
import episodesReducer from './episodes/reducer';
import usersReducer from './users/reducer';

export default combineReducers({
    charactersReducer, episodesReducer, usersReducer
})