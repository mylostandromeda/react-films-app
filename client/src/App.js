import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Redirect, Route} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import FilmsPage from "./pages/filmsPage/FilmsPage";
import UsersPage from "./pages/usersPage/UsersPage";
import FavoritesPage from "./pages/favoritesPage/FavoritesPage";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Loader from "./components/loader/Loader";
import {init} from "./store/actions/auth/auth";
import FilmInfoPage from "./pages/filmInfoPage/FilmInfoPage";
import LikesPage from "./pages/likesPage/LikesPage";
import UserInfoPage from "./pages/userInfoPage/UserInfoPage";

function App() {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.auth.isLoading);

    useEffect(()=>{
        dispatch(init());
    }, [dispatch]);

    return (
        <>
            {isLoading ? (
                <Loader/>
            ) : (
                <Router>
                    <Switch>
                        <PrivateRoute exact path="/films">
                            <FilmsPage/>
                        </PrivateRoute>
                        <PrivateRoute exact path="/films/:id">
                            <FilmInfoPage/>
                        </PrivateRoute>
                        <PrivateRoute exact path="/users">
                            <UsersPage/>
                        </PrivateRoute>
                        <PrivateRoute exact path="/users/:id">
                            <UserInfoPage/>
                        </PrivateRoute>
                        <PrivateRoute exact path="/favorites">
                            <FavoritesPage/>
                        </PrivateRoute>
                        <PrivateRoute exact path="/likes">
                            <LikesPage/>
                        </PrivateRoute>
                        <Route exact path="/login">
                            <Login/>
                        </Route>
                        <Route exact path="/register">
                            <Register/>
                        </Route>
                        <Redirect from="*" to="/films"/>
                    </Switch>
                </Router>
            )}
        </>
    );
}

export default App;
