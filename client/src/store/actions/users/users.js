import * as api from '../../../api';
import {
    SET_USER_BY_ID,
    SET_USERS,
    CLEAR_PICKED_USER,
    CLEAR_USER_DATA
} from "../actionTypes";

export const getUsers = () => async (dispatch) => {
    try {
        const {data} = await api.getUsers();
        dispatch({type: SET_USERS, payload: {users: data, isLoading: false}});
    } catch (e) {
        console.log(e);
    }
};

export const getUserById = (id) => async (dispatch) => {
    try {
        const {data} = await api.getUserById(id);
        dispatch({type: SET_USER_BY_ID, payload: {pickedUser: data, isUserLoading: false}});
    } catch (e) {
        console.log(e);
    }
};

export const clearPickedUserData = () => {
    return {type: CLEAR_PICKED_USER, payload: {pickedUser: null, isUserLoading: true}}
}


export const clearUserData = () => {
    return {type: CLEAR_USER_DATA}
}
