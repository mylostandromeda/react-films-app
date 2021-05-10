import React from 'react';
import './IntroLayout.scss';
import './Form.scss';
import {
    Layout
} from 'antd';
import PropTypes from 'prop-types';

import Header from "../../components/header/Header";
const IntroLayout = ({title, children}) => {
    const {Content} = Layout;
    return (
        <>
            <Layout className="intro-layout">
                <Header/>
                <Content className="intro-layout__form-wrapper">
                    <div className="form">
                        {title && <h2 className="form__title">{title}</h2>}
                        {children}
                    </div>
                </Content>
            </Layout>
        </>
    );
}

Header.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element
}

export default IntroLayout;
