import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Todo} from "../model/Todos.types.ts";

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    tagTypes: ['Todos'],
    endpoints: (build) => ({
        getTodos: build.query<Todo[], number>({
            query: (limit = '') => `todos?${limit && `_limit=${limit}`}`,
            providesTags: ['Todos'],
        })
    }),
});

export const { useGetTodosQuery } = todosApi;