import {useGetPostsQuery} from "../../../../entities/post/api/postsApi.ts";

export const usePosts = (limit) => {
    const { data, isLoading, error } = useGetPostsQuery(limit);

    return {
        posts: data ?? [],
        isLoading,
        error
    }
};