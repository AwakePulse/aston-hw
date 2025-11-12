import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Post} from "../Post.types.ts";
import {setPosts} from "../model/slice/postSlice.ts";

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    tagTypes: ['Posts'],
    endpoints: (build) => ({
        getPosts: build.query<Post[], number>({
            query: (limit = '') => `posts?${limit && `_limit=${limit}`}`,
            providesTags: (result) =>
                result
                    ? [...result.map(({id}) => ({type: 'Posts' as const, id})), { type: 'Posts', id: 'LIST' }]
                    : [{ type: 'Posts', id: 'LIST' }],
            async onQueryStarted(arg, {dispatch, queryFulfilled}) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setPosts(data));
                } catch {

                }
            }
        }),
        getPostsById: build.query<Post, number>({
            query: (id) => `posts/${id}`,
            providesTags: ['Posts'],
        }),
        // Example how can create a post
        addPost: build.query<Post, Post>({
            query: (post) => ({
                url: `/posts`,
                method: 'POST',
                body: post
            }),
            invalidatesTags: [{ type: 'Posts', id: 'LIST' }]
        }),
    }),
});

export const { useGetPostsQuery, useGetPostsByIdQuery } = postsApi;