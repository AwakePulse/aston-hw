import React from 'react';
import {PhotosListTypes} from "./PhotosList.types.ts";
import {Photo} from "../../entities/photos/Photo.types.ts";
import PhotoCard from "../../entities/photos/ui/PhotoCard.tsx";
import styles from './PhotosList.module.css';

const PhotosList: React.FC<PhotosListTypes> = ({photos}: {photos: Photo[]}) => {
    return (
        <div className={styles.photos_elem}>
            <h1>Album</h1>
            <div className={styles.photos_container}>
                {photos.map(photo =>
                    <PhotoCard key={photo.id} photo={photo}/>
                )}
            </div>
        </div>
    );
};

export default PhotosList;