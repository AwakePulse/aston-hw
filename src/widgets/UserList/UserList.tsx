import React, {PropsWithChildren} from 'react';
import {UserListProps} from "./UserList.types.ts";
import UserCard from "../../entities/user/ui/UserCard.tsx";
import styles from './UserList.module.css';
import {ItemList} from "../../shared/ui/ItemList/ItemList.tsx";
import {User} from "../../entities/user/model/User.types.ts";

const UserList = ({users = []}: PropsWithChildren<UserListProps>) => {
    return (
        <div className={styles.users_list}>
            <div className={styles.head_block}>
                <h1>Users</h1>
            </div>
            <div className={styles.users_elem}>
                {/*{users?.map(user => (*/}
                {/*    <UserCard*/}
                {/*        key={user.id}*/}
                {/*        user={user}*/}
                {/*    />*/}
                {/*))}*/}
                <ItemList
                    items={users}
                    renderItem={(user: User) => (
                        <UserCard key={user.id} user={user} />
                    )}
                />
            </div>
        </div>
    );
};

export default UserList;