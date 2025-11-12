import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {User} from "../User.types.ts";
import {Post} from "../../post/Post.types.ts";
import {Album} from "../../albums/Albums.types.ts";
import {Todo} from "../../todos/Todos.types.ts";
import {setUsers} from "../model/slice/userSlice.ts";

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    tagTypes: ['Users'],
    endpoints: (build) => ({
        getUsers: build.query<User[], number>({
            query: (limit = '') => `users?${limit && `_limit=${limit}`}`,
            providesTags: (result) =>
                result
                    ? [...result.map(({id}) => ({type: 'Users' as const, id})), { type: 'Users', id: 'LIST' }]
                    : [{ type: 'Users', id: 'LIST' }],
            async onQueryStarted(arg, {dispatch, queryFulfilled}) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setUsers(data));
                } catch {

                }
            }
        }),
        getUserById: build.query<User, number>({
            query: (id) => `users/${id}`,
            providesTags: ['Users'],
        }),
        getUserPosts: build.query<Post[], number>({
            query: (userId) => `posts?userId=${userId}`,
            providesTags: ['Users'],
        }),
        getUserAlbums: build.query<Album[], number>({
            query: (userId) => `albums?userId=${userId}`,
            providesTags: ['Users'],
        }),
        getUserTodos: build.query<Todo[], number>({
            query: (userId) => `todos?userId=${userId}`,
            providesTags: ['Users'],
        }),
    }),
});

export const {
    useGetUsersQuery,
    useGetUserByIdQuery,
    useGetUserPostsQuery,
    useGetUserAlbumsQuery,
    useGetUserTodosQuery
} = usersApi;