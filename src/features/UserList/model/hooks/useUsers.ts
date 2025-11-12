import {useGetUsersQuery} from "../../../../entities/user/api/usersApi.ts";

export const useUsers = (limit) => {
    const { data, isLoading, error } = useGetUsersQuery(limit);

    return {
        users: data ?? [],
        isLoading,
        error
    }
}