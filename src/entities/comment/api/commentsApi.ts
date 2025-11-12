import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const commentsApi = createApi({
    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    tagTypes: ['Comments'],
    endpoints: (build) => ({
        getComments: build.query<Comment[], { postId: number; limit?: number }>({
            query: ({postId, limit = 5}) => `comments?postId=${postId}&${limit && `_limit=${limit}`}`,
            providesTags: ['Comments'],
        })
    }),
});

export const { useGetCommentsQuery } = commentsApi;