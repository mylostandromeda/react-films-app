import {
    CHANGE_SKIP_VALUE,
    SET_FILMS,
    SET_CURRENT_FILM,
    CLEAR_CURRENT_FILM,
    ADD_LIKE, REMOVE_LIKE,
    SET_LIKED_FILMS,
    CLEAR_DATA,
    SET_SEARCH,
    REMOVE_LOADER,
    SET_FAVORITE_FILMS,
    CLEAR_SEARCH,
    CLEAR_FILTER,
    SET_FILTER,
    SET_HAS_MORE
} from "../actions/actionTypes";

const initialState = {
    films: [],
    skip: 0,
    limit: 30,
    filters: {
        genres: null,
        language: null,
        "network.country.name": null,
        status: null,
        type: null,
        sort: "rating.average DESC"
    },
    hasMore: true,
    search: null,
    pickedFilm: null,
    isFilmLoading: true,
    isLoading: true
}

export default function filmsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FILMS:
            return {
                ...state,
                films: state.films.concat(action.payload.films)
            }
        case SET_LIKED_FILMS:
            return {
                ...state,
                films: state.films.concat(action.payload.films),
                isLoading: false
            }
        case SET_FAVORITE_FILMS:
            return {
                ...state,
                films: state.films.concat(action.payload.films),
                isLoading: false
            }
        case REMOVE_LOADER:
            return  {
                ...state,
                ...action.payload
            }
        case CLEAR_DATA:
            return {
                ...state,
                films: [],
                skip: 0,
                pickedFilm: null,
                isFilmLoading: true,
                isLoading: true,
                hasMore: false
            }
        case CHANGE_SKIP_VALUE:
            return {
                ...state,
                skip: state.skip + state.limit
            }
        case SET_CURRENT_FILM:
            return {
                ...state,
                ...action.payload
            }
        case CLEAR_CURRENT_FILM:
            return {
                ...state,
                ...action.payload
            }
        case SET_SEARCH:
            return {
                ...state,
                ...action.payload
            }
        case ADD_LIKE:
            const films = [...state.films];
            const likedFilm = films.find(el => el.id === action.payload.id);
            likedFilm.likes.push(action.payload.userId);

            return {
                ...state,
                films
            }
        case REMOVE_LIKE:
            const newFilms = [...state.films];
            const selectedFilm = newFilms.find(el => el.id === action.payload.id);
            const index = selectedFilm.likes.indexOf(action.payload.userId);

            if(index > -1) {
                selectedFilm.likes.splice(index, 1);
            }
            return {
                ...state,
                films: newFilms
            }
        case CLEAR_SEARCH:
            return {
                ...state,
                search: null
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filters: {
                    genres: null,
                    language: null,
                    "network.country.name": null,
                    status: null,
                    type: null,
                    sort: 'rating.average DESC'
                }
            }
        case SET_FILTER:
            return {
                ...state,
                filters: {...state.filters, ...action.payload}
            }
        case SET_HAS_MORE:
            return {
                ...state,
                hasMore: action.payload
            }
        default:
            return state;
    }
}
