import React, {useEffect} from 'react';
import './UsersPage.scss';
import AppLayout from "../../layouts/appLayout/AppLayout";
import {useSelector, useDispatch} from 'react-redux';
import {Empty} from 'antd';
import {clearUserData, getUsers} from "../../store/actions/users/users";
import Loader from "../../components/loader/Loader";
import UserCard from "../../components/userCard/UserCard";

const UsersPage = () => {
    const {users, isLoading} = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearUserData());
        dispatch(getUsers());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <AppLayout title="All users">
            <div className="users">
                {isLoading ? (
                    <Loader/>
                ) : (
                    <div className="users__block">
                        {users.length ? (
                            users.map((user, idx) => (
                                <UserCard key={idx} userInfo={user}/>
                            ))
                        ) : (
                            <Empty description="No users"/>
                        )}
                    </div>
                )}
            </div>
        </AppLayout>
    );
}

export default UsersPage;
