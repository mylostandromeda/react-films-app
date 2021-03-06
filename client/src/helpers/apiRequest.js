import axios from 'axios';

const getHeaders = (skipAuthorization) => {
    const token = localStorage.getItem('token');
    if (token && !skipAuthorization) {
        return {'Authorization':`Bearer ${token}`};
    }
};

const apiRequest = ({ method,url,data, skipAuthorization, params}) => {
    return axios({
        method,
        url,
        data,
        headers: getHeaders(skipAuthorization),
        params
    });
};



export default apiRequest;
