import {combineReducers} from 'redux';
import authReducer from "./authReducer";
import filmsReducer from "./filmsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
    auth: authReducer,
    films: filmsReducer,
    users: usersReducer
});
