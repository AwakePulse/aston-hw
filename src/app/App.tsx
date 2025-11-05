import React, {useState} from 'react';
import PostList from "../widgets/PostList/PostList";
import {Post} from "../entities/post/Post.types.ts";
import Header from "../widgets/LayoutHeader/Header";

const App = () => {
    const [posts, setPosts] = useState<Post[]>([
        {id: 1, title: 'First Post', body: 'Body for First Post'},
        {id: 2, title: 'Second Post', body: 'Body for Second Post'},
        {id: 3, title: 'Third Post', body: 'Body for Third Post'},
        {id: 4, title: 'Fourth Post', body: 'Body for Fourth Post'},
        {id: 5, title: 'Fifth Post', body: 'Body for Fifth Post'},
    ])

    return (
        <>
            <Header></Header>
            <PostList posts={posts} />
        </>
    );
};

export default App;
