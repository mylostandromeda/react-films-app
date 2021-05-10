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
    const {films, skip, limit, search, hasMore, filters} = useSelector(state => state.films);
    const {Search} = Input;

    useEffect(()=> {
        dispatch(clearData());
        dispatch(getFilms(0, limit, search,filters));
        return dispatch(clearFilmData());
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
