import React from 'react';
import {Post} from "../Post.types.ts";
import styles from '../PostCard.module.css';

const PostCard: React.FC<Post> = ({post}: Post) => {
    return (
        <div className={styles.post_content}>
            <h3 className={styles.post_content__title}>{post.title}</h3>
            <p className={styles.post_content__body}>{post.body}</p>
        </div>
    );
};

export default PostCard;