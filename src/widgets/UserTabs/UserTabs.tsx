import React from 'react';
import {NavLink, useParams} from "react-router-dom";
import styles from './UserTabs.module.css';

const UserTabs: React.FC = ({setParam}) => {
    const { id } = useParams<{ id: string }>();

    const links = [
        { to: `/users/${id}/posts`, label: 'posts' },
        { to: `/users/${id}/albums`, label: 'albums' },
        { to: `/users/${id}/todos`, label: 'todos' },
    ];

    return (
        <div className={styles.tabs_menu}>
            {links.map(link => (
              <NavLink
                  key={link.to}
                  to={link.to}
                  className={({isActive}) => `${styles.tabs_link} ${isActive ? styles.active : ''}`}
              >{link.label}</NavLink>
    ))}
        </div>
    );
};

export default UserTabs;