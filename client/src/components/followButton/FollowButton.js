import React from 'react';
import './FollowButton.scss';
import {Button} from 'antd';
import PropTypes from 'prop-types';

const FollowButton = ({onClick, type, content}) => {
    return (
        <Button type={type} onClick={onClick}>{content}</Button>
    );
};

FollowButton.propTypes = {
    type: PropTypes.string,
    content: PropTypes.string,
    onClick: PropTypes.func
}

export default FollowButton;
