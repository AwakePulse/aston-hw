import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Photo} from "../../photos/Photo.types.ts";

export const albumsApi = createApi({
    reducerPath: 'albumsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    tagTypes: ['Albums'],
    endpoints: (build) => ({
        getAlbumPhotos: build.query<Photo[], { albumId: number; limit?: number }>({
            query: ({albumId, limit = ''}) => `photos?albumId=${albumId}&_limit=${limit}`,
            providesTags: ['Albums'],
        })
    }),
});

export const { useGetAlbumPhotosQuery } = albumsApi;