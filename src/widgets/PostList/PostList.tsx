import React, {useCallback, useState} from 'react';
import PostCard from "../../entities/post/ui/PostCard.tsx";
import {PostListProp} from "./PostList.types.ts";
import styles from './PostList.module.css';
import PostLengthFilter from "../../features/PostLengthFilter/ui/PostLengthFilter.tsx";

const PostList: React.FC<PostListProp> = ({posts = [], selectedFilter, onFilterChange}: PostListProp) => {
    const [openedPostId, setOpenedPostId] = useState<number | null>(null);

    const handlerToggle = useCallback((id: number) => {
        setOpenedPostId(prev => (prev === id ? null : id));
    }, [])

    return (
        <div className={styles.posts_list}>
            <div className={styles.head_block}>
                <h1>Posts</h1>
                <PostLengthFilter
                    value={selectedFilter}
                    onChange={onFilterChange}
                    defaultValue="Sort by">
                    <PostLengthFilter.Option value="title_up">Title Up</PostLengthFilter.Option>
                    <PostLengthFilter.Option value="title_down">Title Down</PostLengthFilter.Option>
                </PostLengthFilter>
            </div>
            <div className={styles.posts_elem}>
                {posts?.map(post =>
                    <PostCard
                        key={post.id}
                        post={post}
                        isOpen={openedPostId === post.id}
                        onToggle={() => handlerToggle(post.id)}
                    />
                )}
            </div>
        </div>
    );
};

export default PostList;