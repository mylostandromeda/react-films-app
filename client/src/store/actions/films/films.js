import * as api from '../../../api';
import {
    CHANGE_SKIP_VALUE,
    CLEAR_CURRENT_FILM,
    SET_CURRENT_FILM,
    SET_FILMS,
    ADD_LIKE,
    REMOVE_LIKE,
    SET_LIKED_FILMS,
    CLEAR_DATA,
    SET_SEARCH,
    REMOVE_LOADER,
    SET_FAVORITE_FILMS,
    CLEAR_SEARCH,
    CLEAR_FILTER,
    SET_FILTER,
    SET_HAS_MORE
} from "../actionTypes";

export const getFilms = (skip, limit, search, filters) => async (dispatch) => {
    try {
        const {data} = await api.getFilms(skip, limit, search, filters);
        if(data.length) {
            dispatch({type: SET_FILMS, payload: {films: data}});
            dispatch({type: CHANGE_SKIP_VALUE});
            dispatch({type: SET_HAS_MORE, payload: true})
        } else {
            dispatch({type: REMOVE_LOADER, payload: {hasMore: false, isLoading: false}});
        }
    } catch (e) {
        console.log(e);
    }
};

export const getLikedFilms = (skip, limit) => async (dispatch) => {
    try {
        const {data} = await api.getLikedFilms(skip, limit);
        if(data.length) {
            dispatch({type: SET_LIKED_FILMS, payload: {films: data}});
            dispatch({type: CHANGE_SKIP_VALUE});
            dispatch({type: SET_HAS_MORE, payload: true})
        } else {
            dispatch({type: REMOVE_LOADER, payload: {hasMore: false, isLoading: false}});
        }
    } catch (e) {
        console.log(e);
    }
};

export const getFavoriteFilms = (skip, limit, id) => async (dispatch) => {
    try {
        const {data} = await api.getFavoriteFilms(skip, limit, id);
        if(data.length) {
            dispatch({type: SET_FAVORITE_FILMS, payload: {films: data}});
            dispatch({type: CHANGE_SKIP_VALUE});
            dispatch({type: SET_HAS_MORE, payload: true})
        } else {
            dispatch({type: REMOVE_LOADER, payload: {hasMore: false, isLoading: false}});
        }
    } catch (e) {
        console.log(e);
    }
};

export const getFilmById = (id) => async (dispatch) => {
    try {
        const {data} = await api.getFilmById(id);
        dispatch({type: SET_CURRENT_FILM, payload: {pickedFilm: data, isFilmLoading: false}});
    } catch (e) {
        console.log(e);
    }
};

export const clearFilmData = () => {
    return {type: CLEAR_CURRENT_FILM, payload: {pickedFilm: null, isFilmLoading: true}}
};

export const setSearch = (value) => {
    return {type: SET_SEARCH, payload: {search: value}}
};

export const addLike = (id, userId) => async (dispatch) => {
    try {
        dispatch({type: ADD_LIKE, payload: {id, userId}});
        await api.addLike(id);
    } catch (e) {
        dispatch({type: REMOVE_LIKE, payload: {id,  userId}});
    }
};

export const removeLike = (id,userId) => async (dispatch) => {
    try {
        dispatch({type: REMOVE_LIKE, payload: {id, userId}});
        await api.removeLike(id);
    } catch (e) {
        dispatch({type: ADD_LIKE, payload: {id, userId}});
    }
};

export const clearData = () => {
    return {type: CLEAR_DATA};
};

export const clearSearch = () => {
    return {type: CLEAR_SEARCH};
};

export const clearFilter = () => {
    return {type: CLEAR_FILTER};
};

export const setFilter = (data) => {
    return {type: SET_FILTER, payload: {...data}};
};
