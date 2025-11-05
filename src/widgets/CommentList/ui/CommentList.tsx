import React from 'react';
import {CommentListProp, CommentType} from "../CommentList.types.ts";
import styles from '../CommentList.module.css';

const CommentList: React.FC<CommentListProp> = ({comments}) => {

    return (
        <div className={styles.comments_content}>
            {comments.map(comment =>
            <div key={comment.id} className={styles.comment_content}>
                <span className={styles.comment_name}>{comment.id}</span>
                <p className={styles.comment_text}>Text: {comment.text}</p>
            </div>
            )}
        </div>
    );
};

export default CommentList;