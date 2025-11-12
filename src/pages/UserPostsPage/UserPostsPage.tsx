import React from 'react';
import {useGetUserPostsQuery} from "../../entities/user/api/usersApi.ts";
import styles from "./UserPostsPage.module.css";
import PostCard from "../../entities/post/ui/PostCard.tsx";
import {withUserDataPage} from "../../shared/lib/hoc/withUserDataPage.tsx";
import {Post} from "../../entities/post/Post.types.ts";

// const UserPostsPage = () => {
//     const { id } = useParams<{id: string}>();
//     const {data: posts, isLoading} = useGetUserPostsQuery(id);
//
//     if(isLoading) return <Loader />
//
//     return (
//         <div className={styles.posts_elem}>
//             {posts?.map(post =>
//                 <PostCard
//                     key={post.id}
//                     post={post}
//                 />
//             )}
//         </div>
//     );
// };

export default withUserDataPage<Post>({
    useQueryHook: useGetUserPostsQuery,
    ItemComponent: ({item}) => <PostCard post={item}/>,
    className: styles.posts_elem,
});