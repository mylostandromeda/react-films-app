import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AppLayout from "../../layouts/appLayout/AppLayout";
import { Empty } from 'antd';
import {clearData, clearFilmData, getLikedFilms} from "../../store/actions/films/films";
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from "../../components/loader/Loader";
import FilmCard from "../../components/filmCard/FilmCard";

const LikesPage = () => {
    const dispatch = useDispatch();
    const {films, skip, limit, isLoading, hasMore} = useSelector(state => state.films);
    const {user} = useSelector(state => state.auth);
    const filteredFilms = films.filter(film => film.likes.includes(user._id));

    useEffect(() => {
        dispatch(clearData());
        dispatch(getLikedFilms(0, limit));
        return dispatch(clearFilmData());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const fetchFilms = () => {
        dispatch(getLikedFilms(skip, limit));
    };

    return (
        <>
            <AppLayout title="Your Likes">
                {isLoading ? (
                    <Loader/>
                ) : (filteredFilms.length ? (
                        <InfiniteScroll
                            dataLength={films.length}
                            next={fetchFilms}
                            hasMore={hasMore}
                            loader={<Loader/>}
                            style={{height: 'initial', overflow: 'hidden'}}
                            className="films__wrapper"
                        >
                            {filteredFilms.map((film, index) =>
                                <FilmCard key={index} data={film}/>
                            )}
                            <div className="film-item film-item_gap"/>
                            <div className="film-item film-item_gap"/>
                            <div className="film-item film-item_gap"/>
                        </InfiniteScroll>
                    ) : (<Empty description="No likes" className="films__empty"/>)
                )}
            </AppLayout>
        </>
    );
};

export default LikesPage;
