import React, {useCallback, useState} from 'react';
import {Post, PostCardProps} from "../Post.types.ts";
import styles from '../PostCard.module.css';
import InlineButton from "../../../shared/ui/InlineButtom/InlineButton";
import CommentList from "../../../widgets/CommentList/ui/CommentList.tsx";

const PostCard: React.FC<PostCardProps> = ({post, isOpen, onToggle}: {post: Post}) => {
    return (
        <div className={styles.post}>
            <div className={styles.post_content}>
                <h3 className={styles.post_content__title}>{post.title}</h3>
                <p className={styles.post_content__body}>{post.body}</p>
                <InlineButton onClick={onToggle}>comments</InlineButton>
            </div>
            {isOpen && post.comments?.length && (
                <CommentList comments={post.comments} />
            )}
        </div>
    );
};

export default PostCard;