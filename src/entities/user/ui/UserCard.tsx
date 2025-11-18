import React, {useCallback, useState} from 'react';
import {User} from "../model/User.types.ts";
import styles from '../UserCard.module.css';
import {NavLink} from "react-router-dom";

const UserCard: React.FC = ({user}: {user: User}) => {
    return (
        <NavLink
            to={`${user.id}/posts`}
            state={{user}}
            className={styles.user}
        >
            <div className={styles.user_content}>
                <h3 className={styles.user_content__username}>{user.username}</h3>
                <p className={styles.user_content__name}>{user.name}</p>
            </div>
        </NavLink>
    );
};

export default UserCard;