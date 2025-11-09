import React from 'react';
import {UserListProps} from "./UserList.types.ts";
import UserCard from "../../entities/user/ui/UserCard.tsx";
import styles from './UserList.module.css';

const UserList: React.FC<UserListProps> = ({users = []}: UserListProps) => {
    return (
        <div className={styles.users_list}>
            <div className={styles.head_block}>
                <h1>Users</h1>
            </div>
            <div className={styles.users_elem}>
                {users?.map(user => (
                    <UserCard
                        key={user.id}
                        user={user}
                    />
                ))}
            </div>
        </div>
    );
};

export default UserList;