import {
    AUTH,
    LOGOUT,
    ADD_FAVORITE,
    REMOVE_FAVORITE,
    FOLLOW_USER,
    UNFOLLOW_USER
} from "../actions/actionTypes";

const initialState = {
    user: null,
    isAuthorized: false,
    isLoading: true
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH:
            return {
                ...state,
                ...action.payload
            }
        case LOGOUT:
            return {
                ...state,
                ...action.payload
            }
        case ADD_FAVORITE:
            const addedFavorite = state.user;
            addedFavorite.favorites.push(action.payload.filmId);
            return {
                ...state,
                user: {...addedFavorite}
            }
        case REMOVE_FAVORITE:
            const removedFavorite = state.user;
            const index = removedFavorite.favorites.indexOf(action.payload.filmId);
            if(index > -1) {
                removedFavorite.favorites.splice(index, 1);
            }
            return {
                ...state,
                user: {...removedFavorite}
            }
        case FOLLOW_USER:
            return {
                ...state,
                user: {...state.user, friends: [...state.user.friends, action.payload.userId]}
            }
        case UNFOLLOW_USER:
            const friends = [...state.user.friends];
            const updatedFriends = friends.filter(friend => friend !== action.payload.userId);
            return {
                ...state,
                user: {...state.user, friends: updatedFriends}
            }
        default:
            return state;
    }
}
