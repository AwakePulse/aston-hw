import React, {useEffect, useMemo, useState} from 'react';
import PostList from "../widgets/PostList/PostList";
import {Post} from "../entities/post/Post.types.ts";
import Header from "../widgets/LayoutHeader/Header";
import {withLoading} from "../shared/lib/hoc/withLoading.tsx";
import {filterByLength} from "../features/PostLengthFilter/lib/filterByLength.ts";

const PostListWithLoading = withLoading(PostList);

const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);
    const [selectedFilter, setSelectedFilter] = useState('');

    const filteredPosts = useMemo(() => {
        return filterByLength(posts, selectedFilter);
    }, [posts, selectedFilter])

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setPosts([
                {id: 1, title: 'First Post', body: 'Body for First Post', comments: [{id:1, text: 'Cool First!'},{id:2, text: 'Nice! First'}]},
                {id: 2, title: 'Second Post', body: 'Body for Second Post', comments: [{id:1, text: 'Cool Second!'}]},
                {id: 3, title: 'Third Post', body: 'Body for Third Post', comments: [{id:1, text: 'Cool Third!'},{id:2, text: 'Nice Third!'}]},
                {id: 4, title: 'Fourth Post', body: 'Body for Fourth Post', comments: [{id:1, text: 'Cool Fourth!'},{id:2, text: 'Nice Fourth!'}]},
                {id: 5, title: 'Fifth Post', body: 'Body for Fifth Post', comments: [{id:1, text: 'Cool Fifth!'}]},
            ])
            setIsLoading(false);
        }, 1000)
    }, []);

    return (
        <>
            <Header></Header>
            <PostListWithLoading
                isLoading={isLoading}
                posts={filteredPosts}
                onFilterChange={setSelectedFilter}
                selectedFilter={selectedFilter}
            />
        </>
    );
};

export default App;
