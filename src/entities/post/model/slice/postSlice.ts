import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {Post} from "../Post.types.ts";
import {RootState} from "../../../../app/providers/store";


const postsAdapter = createEntityAdapter<Post>({
    selectId: (post: Post) => post.id,
    sortComparer: (a, b) => b.id - a.id,
})

const postsSlice = createSlice({
    name: 'posts',
    initialState: postsAdapter.getInitialState(),
    reducers: {
        addPost: postsAdapter.addOne,
        setPosts: postsAdapter.setAll,
        updatePost: postsAdapter.updateOne,
        removePost: postsAdapter.removeOne
    }
})

export const {
    addPost,
    setPosts,
    updatePost,
    removePost
} = postsSlice.actions;

export const postsReducer = postsSlice.reducer;

export const postsSelectors = postsAdapter.getSelectors((state: RootState) => state.posts);