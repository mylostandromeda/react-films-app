import React from 'react';
import {useDispatch} from 'react-redux';
import {useHistory, Link} from 'react-router-dom';
import {signUp} from '../../store/actions/auth/auth';
import {
    Form,
    Input,
    Button
} from 'antd';
import {MailOutlined, LockOutlined,UserOutlined} from '@ant-design/icons';
import IntroLayout from "../../layouts/introLayout/IntroLayout";

const Register = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [form] = Form.useForm();

    const onFinish = (formData) => {
        dispatch(signUp(formData,history));
    };

    const confirmPasswordValidate = ({getFieldValue}) => ({
        validator(_, value) {
            if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
            }
            return Promise.reject(new Error('The two passwords that you entered do not match!'));
        },
    });

    return (
        <>
            <IntroLayout title="Sign Up">
                <Form form={form} name="register" onFinish={onFinish} scrollToFirstError>
                    <Form.Item
                        name="firstName"
                        rules={[{required: true, message: 'Please input your First Name!'}]}
                    >
                        <Input
                            className="form__input"
                            prefix={<UserOutlined className="site-form-item-icon"/>}
                            placeholder="First Name"
                        />
                    </Form.Item>
                    <Form.Item
                        name="lastName"
                        rules={[{required: true, message: 'Please input your Last Name!'}]}
                    >
                        <Input
                            className="form__input"
                            prefix={<UserOutlined className="site-form-item-icon"/>}
                            placeholder="Last Name"
                        />
                    </Form.Item>
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
                        rules={[
                            {required: true, message: 'Please input your password!'}]}
                        hasFeedback
                    >
                        <Input.Password
                            className="form__input"
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item
                        name="confirmPassword"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {required: true, message: 'Please confirm your password!'},
                            confirmPasswordValidate
                        ]}
                    >
                        <Input.Password
                            className="form__input"
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            placeholder="Confirm Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button className="form__button" type="primary" htmlType="submit">
                            sign up
                        </Button>
                    </Form.Item>
                    <div>
                        <p className="form__question">Already have an account?</p>
                        <Link to="/login" className="form__link">Sign in</Link>
                    </div>
                </Form>
            </IntroLayout>
        </>
    );
}

export default Register;
