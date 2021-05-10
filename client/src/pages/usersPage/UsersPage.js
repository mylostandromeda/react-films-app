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
    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearUserData());
        dispatch(getUsers());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <>
            {isLoading ? (
                <Loader/>
            ) : (
                <AppLayout title="Users">
                    <div className="users">
                        <h2>Friends:</h2>
                        <div className="users__block">
                            {user.friends.length ? (
                                user.friends.map((friend, idx) => (
                                    <UserCard key={idx} userInfo={users.find(user => user._id === friend)}/>
                                ))
                            ) : (
                                <Empty description="No friends"/>
                            )}
                        </div>
                        <h2 style={{marginTop: '50px'}}>All Users:</h2>
                        <div className="users__block">
                            {users.length ? (
                                users.map((user, idx) => (
                                    <UserCard key={idx} userInfo={user}/>
                                ))
                            ) : (
                                <Empty description="No users"/>
                            )}
                        </div>
                    </div>
                </AppLayout>
            )}
        </>
    );
}

export default UsersPage;
