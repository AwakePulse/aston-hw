import React from 'react';
import {NavLink, useParams} from "react-router-dom";
import styles from './MainTabs.module.css';

const MainTabs: React.FC = () => {

    const links = [
        { to: `/posts`, label: 'Posts' },
        { to: `/users`, label: 'Users' },
    ];

    return (
        <div className={styles.link_container}>
            {links.map(link => (
                <NavLink
                    key={link.to}
                    to={link.to}
                    className={styles.link_element}
                    style={{
                        backgroundImage: `url(/assets/${link.label}Img.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <p className={styles.link_text}>
                        {link.label}
                    </p>
                </NavLink>
            ))}
        </div>
    );
};

export default MainTabs;