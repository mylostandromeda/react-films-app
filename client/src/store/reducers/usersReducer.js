import {
    SET_USERS,
    SET_USER_BY_ID,
    CLEAR_PICKED_USER,
    CLEAR_USER_DATA
} from "../actions/actionTypes";

const initialState = {
    users: [],
    isLoading: true,
    isUserLoading: true,
    pickedUser: null,
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                ...action.payload
            }
        case SET_USER_BY_ID:
            return {
                ...state,
                ...action.payload
            }
        case CLEAR_PICKED_USER:
            return {
                ...state,
                ...action.payload
            }
        case CLEAR_USER_DATA:
            return  {
                ...state,
                users: [],
                isLoading: true,
                isUserLoading: true,
                pickedUser: null,

            }
        default:
            return state;
    }
}
