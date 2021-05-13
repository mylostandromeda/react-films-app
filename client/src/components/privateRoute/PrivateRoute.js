import React  from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
// no need for these comments
/**
 *  A wrapper for <Route> that redirects to the login
 *  screen if you're not yet authenticated.
 */

/* I am not sure it is a good idea to check every time
for a user to be authorized. It is easier, IMO,
to move the selector out to outer level,
and there to either render login/register or the rest of routes.
That way to check for authorisation only once for the whole batch
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
