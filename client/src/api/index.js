import apiRequest from "../helpers/apiRequest";

export const login = (formData) => apiRequest({
    method: 'post',
    url: 'api/auth/login',
    data: formData,
    skipAuthorization: true
});

export const register = (formData) => apiRequest({
    method: 'post',
    url: 'api/auth/register',
    data: formData,
    skipAuthorization: true
});

export const getCurrentUser = () => apiRequest({
    method: 'get',
    url: 'api/user'
});

export const getUserById = (id) => apiRequest({
    method: 'get',
    url: `api/user/${id}`
});

export const getFilms = (skip, limit, name=null, filter) => apiRequest({
    method: 'get',
    url: 'api/films',
    params: {
        skip,
        limit,
        name,
        ...filter
    }
});

export const getLikedFilms = (skip, limit) => apiRequest({
    method: 'get',
    url: 'api/likes',
    params: {
        skip,
        limit
    }
});

export const getFavoriteFilms = (skip, limit,id) => apiRequest({
    method: 'get',
    url: 'api/favorites',
    params: {
        skip,
        limit,
        id
    }
});

export const getFilmById = (id) => apiRequest({
    method: 'get',
    url: `api/films/${id}`
});

export const getUsers = () => apiRequest({
    method: 'get',
    url: `api/user/all`
});

export const follow = (id) => apiRequest({
    method: 'put',
    url: `api/user/${id}`
});

export const unFollow = (id) => apiRequest({
    method: 'delete',
    url: `api/user/${id}`
});

export const addFavorite = (id) => apiRequest({
    method: 'put',
    url: `api/favorites/${id}`
});

export const removeFavorite = (id) => apiRequest({
    method: 'delete',
    url: `api/favorites/${id}`
});

export const addLike = (id) => apiRequest({
    method: 'put',
    url: `api/likes/${id}`
});

export const removeLike = (id) => apiRequest({
    method: 'delete',
    url: `api/likes/${id}`
});
