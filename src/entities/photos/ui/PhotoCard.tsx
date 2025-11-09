import React from 'react';
import {Photo} from "../Photo.types.ts";
import styles from '../PhotoCard.module.css';

const PhotoCard: React.FC = ({photo}: {photo: Photo}) => {
    return (
        <div className={styles.photo_content}>
            <div className={styles.photo_image}>
                <img src={photo.url} alt="photo"/>
            </div>
            <div className={styles.photo_text_block}>
                <p>{photo.title}</p>
            </div>
        </div>
    );
};

export default PhotoCard;