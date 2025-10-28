import React from 'react';
import PostCard from "../../entities/post/ui/PostCard.tsx";
import {PostListProp} from "./PostList.types.ts";
import styles from './PostList.module.css';

const PostList: React.FC<PostListProp> = ({posts = []}: PostListProp) => {
    return (
        <div className={styles.posts_list}>
            <h1>Posts</h1>
            <div className={styles.posts_elem}>
                {posts?.map(post =>
                    <PostCard key={post.id} post={post}/>
                )}
            </div>
        </div>
    );
};

export default PostList;