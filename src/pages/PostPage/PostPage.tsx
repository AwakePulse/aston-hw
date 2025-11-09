import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useGetPostsByIdQuery} from "../../shared/api/mainApi.ts";
import styles from './PostPage.module.css';

const PostPage: React.FC = () => {
    const location = useLocation();
    const { id } = useParams<{id: string}>();
    const statePost = location.state?.post;
    const {data: fetchedPost, error} = useGetPostsByIdQuery(Number(id), {
        skip: !!statePost,
    });

    const post = statePost ?? fetchedPost;

    if(error || !post) return <p>Post is not exist!</p>;

    return (
        <div className={styles.post_container}>
            <div className={styles.post_content}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        </div>
    );
};

export default PostPage;