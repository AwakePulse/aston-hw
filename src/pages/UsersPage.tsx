import React, {useState} from 'react';
import {usePosts} from "../features/PostList/model/hooks/usePosts.ts";
import UserList from "../widgets/UserList/UserList.tsx";
import {withLoading} from "../shared/lib/hoc/withLoading.tsx";
import {useUsers} from "../features/UserList/model/hooks/useUsers.ts";

const UserListWithLoading = withLoading(UserList);

const UsersPage = () => {
    const [limit, setLimit] = useState('');
    const { users, isLoading } = useUsers(limit);
    const [selectedFilter, setSelectedFilter] = useState('');

    return (
        <>
            <UserListWithLoading users={users} isLoading={isLoading} />
        </>
    );
};

export default UsersPage;