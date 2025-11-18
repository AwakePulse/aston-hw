import React from 'react';
import {Album} from "../model/Albums.types.ts";
import styles from '../AlbumCard.module.css';
import {NavLink} from "react-router-dom";

const AlbumCard: React.FC = ({album}: {album: Album}) => {
    return (
        <NavLink
            to={`/albums/${album.id}/photos`}
            state={{ album }}
        >
            <div className={styles.album_content}>
                <h3 className={styles.album_content__title}>{album.title}</h3>
            </div>
        </NavLink>
    );
};

export default AlbumCard;