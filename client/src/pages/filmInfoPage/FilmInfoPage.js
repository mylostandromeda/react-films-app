import React, {useEffect} from 'react';
import './FilmInfoPage.scss';
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import AppLayout from "../../layouts/appLayout/AppLayout";
import {getFilmById} from "../../store/actions/films/films";
import Loader from "../../components/loader/Loader";

const FilmInfoPage = () => {
    const { id } = useParams();
    const {isFilmLoading, pickedFilm} = useSelector(state => state.films);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFilmById(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <AppLayout>
                {isFilmLoading ? (
                    <Loader/>
                ) : (
                    <div className="film">
                        <img src={pickedFilm.image ?
                            pickedFilm.image.medium
                            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png'
                        } alt={pickedFilm.name}
                             height="295"
                             width="210"
                        />
                        <div className="film__info">
                            <h1 className="film__title">{pickedFilm.name}</h1>
                            {pickedFilm.genres && pickedFilm.genres.map((genre, idx) => (
                                <span className="film__genre" key={idx}>{genre}</span>
                            ))}
                            <p className="film__point"><strong>Type: </strong>{pickedFilm.type}</p>
                            <p className="film__point"><strong>Premiered: </strong>
                                {pickedFilm.premiered ? pickedFilm.premiered : (<span>No premiere info</span>)}
                            </p>
                            <p className="film__point"><strong>Country: </strong>
                                {pickedFilm.network ? pickedFilm.network.country.name : (<span>No country info</span>)}
                            </p>
                            <p className="film__point"><strong>Language: </strong>
                                {pickedFilm.language ? pickedFilm.language : (<span>No language info</span>)}
                            </p>
                            <p className="film__point">
                                <strong>Rating: </strong>
                                {pickedFilm.rating.average ?
                                    pickedFilm.rating.average
                                    : (<span>No Rating</span>)}
                            </p>
                            <p className="film__point"><strong>Status: </strong>{pickedFilm.status}</p>
                            <p className="film__point">
                                <strong>Link: </strong>
                                {pickedFilm.url && (
                                    <a href={pickedFilm.url} target="_blank" rel="noreferrer">{pickedFilm.url}</a>
                                )}
                            </p>
                            <p className="film__point">
                                <strong>Official Site: </strong>
                                {pickedFilm.officialSite ? (
                                    <a href={pickedFilm.officialSite} target="_blank"
                                       rel="noreferrer">{pickedFilm.officialSite}</a>
                                ) : (
                                    <span>No Official Site</span>
                                )}
                            </p>
                            <h2 className="film__description-title">Summary:</h2>
                            <p dangerouslySetInnerHTML={{__html: pickedFilm.summary}} className="film__description"/>
                        </div>
                    </div>
                )}
            </AppLayout>
        </>
    );
};

export default FilmInfoPage;
