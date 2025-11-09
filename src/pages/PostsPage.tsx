import React, {useMemo, useState} from 'react';
import {usePosts} from "../features/PostList/model/hooks/usePosts.ts";
import {filterByLength} from "../features/PostLengthFilter/lib/filterByLength.ts";
import {withLoading} from "../shared/lib/hoc/withLoading.tsx";
import PostList from "../widgets/PostList/PostList.tsx";

const PostListWithLoading = withLoading(PostList);

const PostsPage = () => {
    const [limit, setLimit] = useState('');
    const { posts, isLoading } = usePosts(limit);
    const [selectedFilter, setSelectedFilter] = useState('');

    const filteredPosts = useMemo(() => {
        return filterByLength(posts, selectedFilter);
    }, [posts, selectedFilter])

    return (
        <>
            <PostListWithLoading
                isLoading={isLoading}
                posts={filteredPosts}
                onFilterChange={setSelectedFilter}
                selectedFilter={selectedFilter}
            />
        </>
    );
};

export default PostsPage;