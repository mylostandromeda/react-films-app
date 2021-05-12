import React from 'react';
import './FilmCard.scss';
import { Card } from 'antd';
import {useSelector,useDispatch} from 'react-redux';
import {LikeOutlined,StarOutlined,LikeFilled,StarFilled} from '@ant-design/icons';
import {useHistory} from 'react-router-dom';
import {addLike, removeLike} from "../../store/actions/films/films";
import {addFavorite, removeFavorite} from "../../store/actions/auth/auth";
import PropTypes from 'prop-types';

const FilmCard = ({data}) => {
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth);
    const {Meta} = Card;
    const history = useHistory();

    const onLikeClick = (e) => {
        e.stopPropagation();
        dispatch(addLike(data.id, user._id));
    };

    const onRemoveLikeClick = (e) => {
        e.stopPropagation();
        dispatch(removeLike(data.id, user._id));
    }

    const onStarClick = (e) => {
        e.stopPropagation();
        dispatch(addFavorite(data.id));
    };

    const onRemoveStarClick = (e) => {
        e.stopPropagation();
        dispatch(removeFavorite(data.id));
    };

    const onCardClick = () => {
        history.push(`/films/${data.id}`);
    };


    return (
        <div className="film-item">
            <Card
                className="film-item__content"
                onClick={onCardClick}
                cover={
                    data.image ? (
                        <img
                            alt="example"
                            src={data.image.medium ? data.image.medium : data.image.original}
                        />) : (
                        <img
                            height="295"
                            width="210"
                            alt="example"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"
                        />)
                }
                actions={[
                    data.likes.includes(user._id)
                        ? <LikeFilled
                            onClick={onRemoveLikeClick}
                            className="film-item__reaction"
                            title="like"
                        />
                        : <LikeOutlined
                            onClick={onLikeClick}
                            className="film-item__reaction"
                            title="like"
                        />,
                    user.favorites.includes(data.id)
                        ? <StarFilled
                            onClick={onRemoveStarClick}
                            className="film-item__reaction"
                            title="favorite"
                        />
                        : <StarOutlined
                            onClick={onStarClick}
                            className="film-item__reaction"
                            title="favorite"
                        />
                ]}
            >
                <Meta
                    title={data.name}
                />
            </Card>
        </div>
    );
};

FilmCard.propTypes = {
    data: PropTypes.object
}

export default FilmCard;
