import React, {useEffect} from 'react';
import './FilmsPage.scss';
import {Input} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {clearData, clearFilmData, getFilms, setSearch} from "../../store/actions/films/films";
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from "../../components/loader/Loader";
import AppLayout from "../../layouts/appLayout/AppLayout";
import FilmCard from "../../components/filmCard/FilmCard";

const FilmsPage = () => {
    const dispatch = useDispatch();
    // if useSelector returns an object, it is good to provide
    // a function comparator as a second argument, such as lodash's isEqual,
    // because useSelector compares selector values by strict-equality
    const {films, skip, limit, search, hasMore, filters} = useSelector(state => state.films);
    const {Search} = Input;

    useEffect(()=> {
        dispatch(clearData());
        dispatch(getFilms(0, limit, search, filters));
        // the useEffect callback may return a void function, in your case it does not.
        // I assume you wanted to dispatch on unmount, in that case
        // return () => {
        // dispatch(clearFilmData());
        // }
        return dispatch(clearFilmData());
        //why is this comment here? If for dispatch, then don't be afraid of listing dispatch, it doesn't change on rerender
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[filters]);

    const fetchFilms = () => {
        dispatch(getFilms(skip, limit, search, filters));
    };

    const onSearch = () => {
        dispatch(clearData());
        dispatch(getFilms(0, limit, search, filters));
    };

    const onSearchChange = (e) => {
      dispatch(setSearch(e.target.value));
    };

    return (
        <>
            <AppLayout title="All Films" sider={true}>
                <InfiniteScroll
                    dataLength={films.length}
                    next={fetchFilms}
                    hasMore={hasMore}
                    loader={<Loader/>}
                    style={{height: 'initial', overflow: 'hidden'}}
                    className="films__wrapper"
                >
                    <Search
                        placeholder="Search film . . ."
                        allowClear
                        enterButton="Search"
                        size="large"
                        value={search}
                        onSearch={onSearch}
                        className="films__search"
                        onChange={onSearchChange}
                    />
                    {films.map((film, index) => (
                        <FilmCard key={index} data={film}/>
                    ))}
                    <div className="film-item film-item_gap"/>
                    <div className="film-item film-item_gap"/>
                    <div className="film-item film-item_gap"/>
                </InfiniteScroll>
            </AppLayout>
        </>
    );
};

export default FilmsPage;
