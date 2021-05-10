import React  from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
/**
 *  A wrapper for <Route> that redirects to the login
 *  screen if you're not yet authenticated.
 */

const PrivateRoute = ({children, ...params}) => {
    const isAuthorized = useSelector(state => state.auth.isAuthorized);
        return (
            <Route {...params}>
                { (isAuthorized) ? (
                    children
                ) : (
                    <Redirect to={{ pathname: '/login' }} />
                )}
            </Route>
        );
};

PrivateRoute.propTypes = {
    children: PropTypes.element,
    params: PropTypes.object
}

export default PrivateRoute;
