import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Avatar} from 'antd'
import {useHistory} from 'react-router-dom';
import {unFollow, follow} from "../../store/actions/auth/auth";
import FollowButton from "../followButton/FollowButton";
import PropTypes from 'prop-types';

const UserCard = ({userInfo}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth);

    const onFollowClick = (e) => {
        e.stopPropagation();
        dispatch(follow(userInfo._id));
    };

    const onUnfollowClick = (e) => {
        e.stopPropagation();
        dispatch(unFollow(userInfo._id));
    };

    const onUserClick = () => {
        history.push(`/users/${userInfo._id}`);
    };

    return (
        <div className="users__item" onClick={onUserClick}>
            <Avatar size={64}>{userInfo.firstName[0].toUpperCase()} {userInfo.lastName[0].toUpperCase()}</Avatar>
            <h2 className="users__name">{userInfo.firstName} {userInfo.lastName}</h2>
            {user.friends.includes(userInfo._id) ? (
                <FollowButton type="default" onClick={onUnfollowClick} content="Following"/>
            ) : (
                <FollowButton type="primary" onClick={onFollowClick} content="Follow"/>
            )}
        </div>
    );
};

UserCard.propTypes = {
    userInfo: PropTypes.object
}

export default UserCard;
