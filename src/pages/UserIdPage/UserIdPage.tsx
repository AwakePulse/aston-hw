import React, {useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";
import {useGetUserByIdQuery} from "../../shared/api/mainApi.ts";
import styles from './UserIdPage.module.css';
import UserTabs from "../../widgets/UserTabs/UserTabs.tsx";
import UserInfo from "../UserInfo/UserInfo.tsx";

const UserIdPage = () => {
    const location = useLocation();
    const { id } = useParams<{id: string}>();
    const stateUser = location.state?.user;
    const {data: fetchedUser, error} = useGetUserByIdQuery(Number(id), {
        skip: !!stateUser,
    })

    const user = stateUser ?? fetchedUser;

    if(error || !user) return <p>User is not exist!</p>

    return (
        <div className={styles.user_page_view}>
            <UserInfo user={user}/>
            <hr/>
            <UserTabs />
            <Outlet />
        </div>
    );
};

export default UserIdPage;