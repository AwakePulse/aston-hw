import {useGetPostsQuery} from "../../../../shared/api/mainApi.ts";

export const usePosts = (limit) => {
    const { data, isLoading, error } = useGetPostsQuery(limit);

    return {
        posts: data ?? [],
        isLoading,
        error
    }
};