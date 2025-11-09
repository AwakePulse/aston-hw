import React from 'react';
import styles from './UserInfo.module.css';
import {User} from "../../entities/user/User.types.ts";

const UserInfo: React.FC = ({user}: {user: User}) => {
    return (
        <div className={styles.user_container}>
            <h1>{user.name}</h1>
            <span>{user.email}</span>
            <p>{user.username}</p>
        </div>
    );
};

export default UserInfo;