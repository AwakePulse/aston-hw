import React from 'react';
import {useParams} from "react-router-dom";
import {useGetPostsByIdQuery} from "../../entities/post/api/postsApi.ts";
import styles from './PostPage.module.css';
import {useSelector} from "react-redux";
import {RootState} from "../../app/providers/store";
import {postsSelectors} from "../../entities/post/model/slice/postSlice.ts";

const PostPage: React.FC = () => {
    const { id } = useParams<{id: string}>();
    const userFromStore = useSelector((state: RootState) => postsSelectors.selectById(state, Number(id)));
    const {data: fetchedPost, error} = useGetPostsByIdQuery(Number(id), {
        skip: !!userFromStore,
    });

    const post = userFromStore ?? fetchedPost;

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