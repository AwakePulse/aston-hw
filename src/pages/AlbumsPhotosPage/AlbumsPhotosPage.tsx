import React, {useMemo, useState} from 'react';
import {usePhotos} from "../../features/PhotosList/model/hooks/usePhotos.ts";
import {useParams} from "react-router-dom";
import PhotosList from "../../widgets/PhotosList/PhotosList.tsx";
import {withLoading} from "../../shared/lib/hoc/withLoading.tsx";
import Button from "../../shared/ui/Button/Button.tsx";
import styles from './AlbumsPhotosPage.module.css';

const PhotosListWithLoading = withLoading(PhotosList)

const AlbumsPhotosPage = () => {
    const { id } = useParams<{id: string}>();
    const [limit, setLimit] = useState(10);
    const {photos, isLoading} = usePhotos(limit, id);

    return (
        <div className={styles.photos_component}>
            <PhotosListWithLoading
                photos={photos}
                isLoading={isLoading}
            />
            {!isLoading && (
                <Button onClick={() => setLimit(prev => prev + 10)}>
                    Load more
                </Button>
            )}
        </div>
    );
};

export default AlbumsPhotosPage;