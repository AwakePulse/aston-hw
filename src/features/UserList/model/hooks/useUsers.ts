import {useGetUsersQuery} from "../../../../shared/api/mainApi.ts";

export const useUsers = (limit) => {
    const { data, isLoading, error } = useGetUsersQuery(limit);

    return {
        users: data ?? [],
        isLoading,
        error
    }
}