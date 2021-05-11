import React from 'react';
import './Header.scss';
import logo from '../../logo.png';
import {useSelector} from 'react-redux';
import {
    Layout,
    Popover,
    Avatar
} from 'antd';
import Menu from "../menu/Menu";
import {useHistory} from 'react-router-dom';
import UserPopover from "../userPopover/UserPopover";

const Header = () => {
    const {isAuthorized, user} = useSelector(state => state.auth);
    const { Header} = Layout;
    const history = useHistory();

    const onLogoClick = () => {
        history.push('/');
    }

    return (
        <>
            <Header
                className="header"
            >
                <div className="header__container">
                    <img src={logo} alt="logo" onClick={onLogoClick} className="header__logo"/>
                    {isAuthorized && (
                        <>
                            <Menu/>
                            <Popover content={<UserPopover userInfo={user}/>} trigger="click" className="header__popover">
                                <Avatar size={64}>
                                    {user.firstName[0].toUpperCase()} {user.lastName[0].toUpperCase()}
                                </Avatar>
                            </Popover>
                        </>
                    )}
                </div>
            </Header>
        </>
    );
};

export default Header;
