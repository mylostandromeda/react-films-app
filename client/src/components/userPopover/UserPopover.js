import React from 'react';
import './UserPopover.scss';
import {Button,Avatar} from 'antd';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {logout} from "../../store/actions/auth/auth";
import {clearData, clearFilter, clearSearch} from "../../store/actions/films/films";
import {clearUserData} from "../../store/actions/users/users";
import PropTypes from 'prop-types';

const UserPopover = ({userInfo}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const onLogOutClick = () => {
        dispatch(clearData());
        dispatch(clearUserData());
        dispatch(clearFilter());
        dispatch(clearSearch());
        dispatch(logout(history));
    };


    return (
      <div className="popover">
          <Avatar size={64}>
              {userInfo.firstName[0].toUpperCase()} {userInfo.lastName[0].toUpperCase()}
          </Avatar>
          <div className="popover__info">
              <h2 className="popover__name">{userInfo.firstName} {userInfo.lastName}</h2>
              <span className="popover__email">{userInfo.email}</span>
          </div>
          <Button onClick={onLogOutClick} type="primary" className="popover__button">log out</Button>
      </div>
    );
};

UserPopover.propTypes = {
    userInfo: PropTypes.object
}

export default UserPopover;
