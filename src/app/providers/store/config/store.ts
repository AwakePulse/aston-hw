import {configureStore} from "@reduxjs/toolkit";
// import { mainApi } from "../../../../shared/api/mainApi.ts";
import {postsApi} from "../../../../entities/post/api/postsApi.ts";
import {usersApi} from "../../../../entities/user/api/usersApi.ts";
import {albumsApi} from "../../../../entities/albums/api/albumsApi.ts";
import {todosApi} from "../../../../entities/todos/api/todosApi.ts";
import {commentsApi} from "../../../../entities/comment/api/commentsApi.ts";
import {usersReducer} from "../../../../entities/user/model/slice/userSlice.ts";
import {postsReducer} from "../../../../entities/post/model/slice/postSlice.ts";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        posts: postsReducer,
        [postsApi.reducerPath]: postsApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [todosApi.reducerPath]: todosApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(postsApi.middleware)
            .concat(usersApi.middleware)
            .concat(albumsApi.middleware)
            .concat(todosApi.middleware)
            .concat(commentsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch