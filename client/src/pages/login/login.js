import React from 'react';
import {
    Form,
    Input,
    Button
} from 'antd';
import {MailOutlined, LockOutlined} from '@ant-design/icons';
import {useHistory, Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {signIn} from '../../store/actions/auth/auth';
import IntroLayout from "../../layouts/introLayout/IntroLayout";

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const onFinish = (formData) => {
        dispatch(signIn(formData, history));
    };
    return (
        <>
            <IntroLayout title="Sign In">
                <Form
                    name="normal_login"
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {type: 'email', message: 'The input is not valid E-mail!'},
                            {required: true, message: 'Please input your E-mail!'}]}
                    >
                        <Input
                            className="form__input"
                            prefix={<MailOutlined className="site-form-item-icon"/>}
                            placeholder="Email"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{required: true, message: 'Please input your Password!'}]}
                    >
                        <Input.Password
                            className="form__input"
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button className="form__button" type="primary" htmlType="submit">
                            sign in
                        </Button>
                    </Form.Item>
                    <div>
                        <p className="form__question">Don't have an account?</p>
                        <Link to="/register" className="form__link">Create an account</Link>
                    </div>
                </Form>
            </IntroLayout>
        </>
    );
}

export default Login;
