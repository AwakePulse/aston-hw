import React from 'react';
import {Outlet, useParams} from "react-router-dom";
import {useGetUserByIdQuery} from "../../entities/user/api/usersApi.ts";
import styles from './UserIdPage.module.css';
import UserTabs from "../../widgets/UserTabs/UserTabs.tsx";
import UserInfo from "../UserInfo/UserInfo.tsx";
import {useSelector} from "react-redux";
import {usersSelectors} from "../../entities/user/model/slice/userSlice.ts";
import {RootState} from "../../app/providers/store";

const UserIdPage = () => {
    const { id } = useParams<{id: string}>();
    const userFromStore = useSelector((state: RootState) => usersSelectors.selectById(state, Number(id)));
    const {data: fetchedUser, error} = useGetUserByIdQuery(Number(id), {
        skip: !!userFromStore,
    })


    const user = userFromStore ?? fetchedUser;

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