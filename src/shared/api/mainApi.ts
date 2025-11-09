import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Post} from "../../entities/post/Post.types.ts";
import {User} from "../../entities/user/User.types.ts";
import {Album} from "../../entities/albums/Albums.types.ts";
import {Todo} from "../../entities/todos/Todos.types.ts";
import {Photo} from "../../entities/photos/Photo.types.ts";

export const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (build) => ({
        getPosts: build.query<Post[], number>({
            query: (limit = '') => `posts?${limit && `_limit=${limit}`}`,
        }),
        getPostsById: build.query<Post, number>({
            query: (id) => `posts/${id}`,
        }),
        getUsers: build.query<User[], number>({
            query: (limit = '') => `users?${limit && `_limit=${limit}`}`,
        }),
        getUserById: build.query<User, number>({
           query: (id) => `users/${id}`,
        }),
        getUserPosts: build.query<Post[], number>({
            query: (userId) => `posts?userId=${userId}`,
        }),
        getUserAlbums: build.query<Album[], number>({
            query: (userId) => `albums?userId=${userId}`,
        }),
        getUserTodos: build.query<Todo[], number>({
            query: (userId) => `todos?userId=${userId}`,
        }),
        getAlbumPhotos: build.query<Photo[], { albumId: number; limit?: number }>({
            query: ({albumId, limit = ''}) => `photos?albumId=${albumId}&_limit=${limit}`
        })
    }),
});

export const {
    useGetPostsQuery,
    useGetPostsByIdQuery,
    useGetUsersQuery,
    useGetUserByIdQuery,
    useGetUserPostsQuery,
    useGetUserAlbumsQuery,
    useGetUserTodosQuery,
    useGetAlbumPhotosQuery
} = mainApi;