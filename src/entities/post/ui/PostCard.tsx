import React, {useCallback, useState} from 'react';
import {Post, PostCardProps} from "../Post.types.ts";
import styles from '../PostCard.module.css';
import InlineButton from "../../../shared/ui/InlineButtom/InlineButton";
import CommentList from "../../../widgets/CommentList/ui/CommentList.tsx";
import {NavLink} from "react-router-dom";
import {useGetCommentsQuery} from "../../comment/api/commentsApi.ts";
import Loader from "../../../shared/ui/Loader/Loader.tsx";

const PostCard: React.FC<PostCardProps> = ({post, isOpen, onToggle}: {post: Post}) => {
    const { data: comments, isLoading} = useGetCommentsQuery(
        {postId: post.id},
        {skip: !isOpen}
    );

    return (
        <>
            <NavLink
                to={`/posts/${post.id}`}
                state={{ post }}
                className={styles.post}
            >
                <div className={styles.post_content}>
                    <h3 className={styles.post_content__title}>{post.title}</h3>
                    <p className={styles.post_content__body}>{post.body}</p>
                    <InlineButton onClick={onToggle}>comments</InlineButton>
                </div>
                {isOpen && <CommentList comments={comments} isLoading={isLoading}/>}
            </NavLink>
        </>

    );
};

export default PostCard;