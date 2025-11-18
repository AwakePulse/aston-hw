import React, {PropsWithChildren} from 'react';
import {PhotosListTypes} from "./PhotosList.types.ts";
import {Photo} from "../../entities/photos/model/Photo.types.ts";
import PhotoCard from "../../entities/photos/ui/PhotoCard.tsx";
import styles from './PhotosList.module.css';
import {ItemList} from "../../shared/ui/ItemList/ItemList.tsx";

const PhotosList = ({photos}: PropsWithChildren<PhotosListTypes>) => {
    return (
        <div className={styles.photos_elem}>
            <h1>Album</h1>
            <div className={styles.photos_container}>
                {/*{photos.map(photo =>*/}
                {/*    <PhotoCard key={photo.id} photo={photo}/>*/}
                {/*)}*/}
                <ItemList
                    items={photos}
                    renderItem={(photo: Photo) => (
                        <PhotoCard key={photo.id} photo={photo} />
                    )}
                />
            </div>
        </div>
    );
};

export default PhotosList;