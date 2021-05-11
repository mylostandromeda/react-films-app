import React from 'react';
import './AppLayout.scss';
import {
    Layout
} from 'antd';
import Header from "../../components/header/Header";
import Filter from "../../components/filter/Filter";
import PropTypes from 'prop-types';

const AppLayout = ({children, title, sider}) => {
    const {Content} = Layout;
    return (
        <>
            <Layout className="app-layout">
                <Header/>
                {title && (<h1 className="app-layout__title">{title}</h1>)}
                <Layout className="app-layout__content">
                    <Content className="app-layout__form-wrapper">
                        {children}
                        {sider && (
                            <Filter/>
                        )}
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

AppLayout.propTypes = {
    children: PropTypes.element,
    title: PropTypes.string,
    sider: PropTypes.bool
}
export default AppLayout;
