import React, {useEffect} from 'react';
import '../usersPage/UsersPage.scss';
import AppLayout from "../../layouts/appLayout/AppLayout";
import {useSelector, useDispatch} from 'react-redux';
import {Empty} from 'antd';
import {clearUserData, getUsers} from "../../store/actions/users/users";
import Loader from "../../components/loader/Loader";
import UserCard from "../../components/userCard/UserCard";

const FriendsPage = () => {
    const {users, isLoading} = useSelector(state => state.users);
    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearUserData());
        dispatch(getUsers());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <AppLayout title="Friends">
            <div className="users">
                {isLoading ? (
                    <Loader/>
                ) : (
                    <div className="users__block">
                        {user.friends.length ? (
                            user.friends.map((friend, idx) => (
                                <UserCard key={idx} userInfo={users.find(user => user._id === friend)}/>
                            ))
                        ) : (
                            <Empty description="No friends"/>
                        )}
                    </div>
                )}
            </div>
        </AppLayout>
    );
}

export default FriendsPage;
