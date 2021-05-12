import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import {Spin} from 'antd';

const Loader  = () => {
    const antIcon = <LoadingOutlined style={{ fontSize: 100, color: '#002725' }} spin />;
    return(
          <Spin indicator={antIcon} style={{margin: '0 auto'}}/>
    );
};

export default Loader;
