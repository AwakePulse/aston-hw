import React, {PropsWithChildren} from 'react';
import {CommentListProp} from "../CommentList.types.ts";
import styles from '../CommentList.module.css';

const CommentList = ({comments, isLoading}: PropsWithChildren<CommentListProp>) => {
    return (
        <div className={styles.comments_content} onClick={(e) => e.preventDefault()}>
            {isLoading
                ? <p>Loading...</p>
                : comments?.length ?
                    comments.map((comment) => (
                        <div key={comment.id} className={styles.comment_content}>
                            <span className={styles.comment_name}>{comment.id}</span>
                            <p className={styles.comment_text}>Text: {comment.body}</p>
                        </div>
                    ))
                : <p>No Comments!</p>
            }
        </div>
    );
};

export default CommentList;

//comments.map(comment =>
//             <div key={comment.id} className={styles.comment_content}>
//                 <span className={styles.comment_name}>{comment.id}</span>
//                 <p className={styles.comment_text}>Text: {comment.body}</p>
//             </div>