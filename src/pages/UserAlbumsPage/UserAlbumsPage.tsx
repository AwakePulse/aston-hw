import React from 'react';
import {useParams} from "react-router-dom";
import {useGetUserAlbumsQuery} from "../../entities/user/api/usersApi.ts";
import Loader from "../../shared/ui/Loader/Loader.tsx";
import AlbumCard from "../../entities/albums/ui/AlbumCard.tsx";
import styles from './UserAlbumsPage.module.css';
import {withUserDataPage} from "../../shared/lib/hoc/withUserDataPage.tsx";
import {Post} from "../../entities/post/model/Post.types.ts";
import PostCard from "../../entities/post/ui/PostCard.tsx";
import {Album} from "../../entities/albums/model/Albums.types.ts";

// const UserAlbumsPage = () => {
//     const { id } = useParams<{id: string}>();
//     const {data: albums, isLoading} = useGetUserAlbumsQuery(id);
//
//     if(isLoading) return <Loader />
//
//     return (
//         <div className={styles.albums_elem}>
//             {albums.map(album =>
//                 <AlbumCard key={album.id} album={album}/>
//             )}
//         </div>
//     );
// };

export default withUserDataPage<Album>({
    useQueryHook: useGetUserAlbumsQuery,
    ItemComponent: ({item}) => <AlbumCard album={item}/>,
    className: styles.albums_elem,
});