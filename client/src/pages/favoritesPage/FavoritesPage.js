import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Empty} from 'antd';
import AppLayout from "../../layouts/appLayout/AppLayout";
import Loader from "../../components/loader/Loader";
import FilmCard from "../../components/filmCard/FilmCard";
import InfiniteScroll from 'react-infinite-scroll-component';
import {clearData, clearFilmData, getFavoriteFilms} from "../../store/actions/films/films";

const FavoritesPage = () => {
    const {isLoading, hasMore, limit, skip, films} = useSelector(state => state.films);
    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const filteredFilms = films.filter(film => user.favorites.includes(film.id));

    useEffect(() => {
        dispatch(clearData());
        dispatch(getFavoriteFilms(0, limit, user._id));
        return dispatch(clearFilmData());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const fetchFilms = () => {
        dispatch(getFavoriteFilms(skip, limit, user._id));
    };

    return(
        <>
            <AppLayout title="Your Favorites">
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
                    ) : (<Empty description="No favorites" className="films__empty"/>)
                )}
            </AppLayout>
        </>
    );
}

export default FavoritesPage;
