import React from 'react';
import './Menu.scss';
import {useLocation, useHistory} from "react-router-dom";
import {Menu} from 'antd';

const MenuComponent = () => {
    const location = useLocation();
    const history = useHistory();

    const handleClick = e => {
        history.push(e.key);
    };

    return (
        <Menu onClick={handleClick} selectedKeys={`/${location.pathname.split('/')[1]}`} mode="horizontal"
              className="menu">
            <Menu.Item key="/films" className="menu__item">
                Films
            </Menu.Item>
            <Menu.Item key="/users" className="menu__item">
                Users
            </Menu.Item>
            <Menu.Item key="/friends" className="menu__item">
                Friends
            </Menu.Item>
            <Menu.Item key="/likes" className="menu__item">
                Likes
            </Menu.Item>
            <Menu.Item key="/favorites" className="menu__item">
                Favorites
            </Menu.Item>
        </Menu>
    );
};

export default MenuComponent;
