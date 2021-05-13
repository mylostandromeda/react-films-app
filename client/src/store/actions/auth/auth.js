/* usually, in the store, for each entity you would have the following structure
  store
  |
  -entity
   |
   entity.selectors.js
   entity.actions.js
   entity.reducers.js
*/
import * as api from '../../../api';
import {
    AUTH,
    LOGOUT,
    ADD_FAVORITE,
    REMOVE_FAVORITE,
    FOLLOW_USER,
    UNFOLLOW_USER
} from "../actionTypes";

const setToken = token => localStorage.setItem('token', token);

const removeToken = () => localStorage.removeItem('token');

export const signUp = (formData, history) => async (dispatch) => {
    try {
        const {data} = await api.register(formData);
        setToken(data.token);
        dispatch({type: AUTH, payload: {user: data.user, isAuthorized: true, isLoading: false}});
        history.push('/films');
    } catch (e) {
        console.log(e);
    }
};

export const signIn = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.login(formData);
        setToken(data.token);
        dispatch({type: AUTH, payload: {user: data.user, isAuthorized: true, isLoading: false}});
        history.push('/films');
    } catch (e) {
        console.log(e);
    }
};

export const logout = (history) => async (dispatch) => {
    try {
        removeToken();
        const payload = {
            user: null,
            isAuthorized: false,
            isLoading: false
        }
        dispatch({type: LOGOUT, payload});
        history.push('/login');
    } catch (e) {
        console.log(e);
    }
}

export const init = () => async (dispatch) => {
  try {
      const {data: user} = await api.getCurrentUser();
      dispatch({type: AUTH, payload: {user, isAuthorized: true, isLoading: false}});
  }  catch (e) {
      dispatch({type: AUTH, payload: {user: null, isAuthorized: false, isLoading: false}});
  }
};

export const addFavorite = (id) => async (dispatch) => {
  try {
      dispatch({type: ADD_FAVORITE, payload: {filmId: id}});
      await api.addFavorite(id);
  }  catch (e) {
      dispatch({type: REMOVE_FAVORITE, payload: {filmId: id}});
  }
};

export const removeFavorite = (id) => async (dispatch) => {
    try {
        dispatch({type: REMOVE_FAVORITE, payload: {filmId: id}});
        await api.removeFavorite(id);
    }  catch (e) {
        dispatch({type: ADD_FAVORITE, payload: {filmId: id}});
    }
};

export const follow = (id) => async (dispatch) => {
    try {
        dispatch({type: FOLLOW_USER, payload: {userId: id}});
        await api.follow(id);
    }  catch (e) {
        dispatch({type: UNFOLLOW_USER, payload: {userId: id}});
    }
};

export const unFollow = (id) => async (dispatch) => {
    try {
        dispatch({type: UNFOLLOW_USER, payload: {userId: id}});
        await api.unFollow(id);
    }  catch (e) {
        dispatch({type: FOLLOW_USER, payload: {userId: id}});
    }
};
