import React, {useEffect} from 'react';
import './UserInfoPage.scss';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from "react-router-dom";
import {Empty,Avatar} from 'antd';
import AppLayout from "../../layouts/appLayout/AppLayout";
import Loader from "../../components/loader/Loader";
import {clearPickedUserData, getUserById} from "../../store/actions/users/users";
import FollowButton from "../../components/followButton/FollowButton";
import {follow, unFollow} from "../../store/actions/auth/auth";
import FilmCard from "../../components/filmCard/FilmCard";
import InfiniteScroll from 'react-infinite-scroll-component';
import {clearData, clearFilmData, getFavoriteFilms} from "../../store/actions/films/films";

const UserInfoPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const {hasMore, limit, skip, films, isLoading} = useSelector(state => state.films);
    const {isUserLoading, pickedUser} = useSelector(state => state.users);
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        dispatch(clearData());
        dispatch(getUserById(id));
        dispatch(getFavoriteFilms(0, limit, id));
        return () => {
            dispatch(clearPickedUserData());
            dispatch(clearFilmData());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchFilms = () => {
        dispatch(getFavoriteFilms(skip, limit, id));
    };

    const onFollowClick = (e) => {
        e.stopPropagation();
        dispatch(follow(id));
    };

    const onUnfollowClick = (e) => {
        e.stopPropagation();
        dispatch(unFollow(id));
    };

    return (
        <AppLayout title="User info">
            {isUserLoading ? (
                <Loader/>
            ) : (pickedUser ? (
                    <>
                        <div className="user">
                            <div className="user__wrapper">
                                <Avatar size={80}>
                                    {pickedUser.firstName[0].toUpperCase()} {pickedUser.lastName[0].toUpperCase()}
                                </Avatar>
                                <div className="user__info">
                                    <h2 className="user__name">
                                        {pickedUser.firstName} {pickedUser.lastName}
                                    </h2>
                                    <span className="user__email">{pickedUser.email}</span>
                                </div>
                                {user.friends.includes(pickedUser._id) ? (
                                    <FollowButton type="default" onClick={onUnfollowClick} content="Following"/>
                                ) : (
                                    <FollowButton type="primary" onClick={onFollowClick} content="Follow"/>
                                )}
                            </div>
                            <h3 className="user__title">Favorites</h3>
                            {user.friends.includes(id) ? (
                                    films.length && !isLoading ? (
                                        <InfiniteScroll
                                            dataLength={films.length}
                                            next={fetchFilms}
                                            hasMore={hasMore}
                                            loader={<Loader/>}
                                            style={{height: 'initial', overflow: 'hidden'}}
                                            className="user__favorites"
                                        >
                                            {films.map((film, index) => (
                                                <FilmCard key={index} data={film}/>
                                            ))}
                                            <div className="film-item film-item_gap"/>
                                            <div className="film-item film-item_gap"/>
                                            <div className="film-item film-item_gap"/>
                                        </InfiniteScroll>
                                    ) : (
                                        <Empty
                                            description="User has no favorites..."
                                            className="user__notification"
                                        />
                                    )
                                )
                                : (
                                    <Empty
                                        description="You have to follow user to see his favorites..."
                                        className="user__notification"
                                    />
                                )}
                        </div>
                    </>
                ) : (
                    <Empty description="No user with this id"/>
                )
            )}
        </AppLayout>
    );
};

export default UserInfoPage;
