import React from 'react';
import {useParams} from "react-router-dom";
import {useGetUserTodosQuery} from "../../entities/user/api/usersApi.ts";
import Loader from "../../shared/ui/Loader/Loader.tsx";
import styles from './UserTodosPage.module.css';
import TodoCard from "../../entities/todos/ui/TodoCard.tsx";
import {withUserDataPage} from "../../shared/lib/hoc/withUserDataPage.tsx";
import {Post} from "../../entities/post/Post.types.ts";
import AlbumCard from "../../entities/albums/ui/AlbumCard.tsx";
import {Todo} from "../../entities/todos/Todos.types.ts";

// const UserTodosPage = () => {
//     const { id } = useParams<{id: string}>();
//     const {data: todos, isLoading} = useGetUserTodosQuery(id);
//
//     if(isLoading) return <Loader />
//
//     return (
//         <div className={styles.todos_elem}>
//             {todos.map(todo =>
//                 <TodoCard key={todo.id} todo={todo}/>
//             )}
//         </div>
//     );
// };

export default withUserDataPage<Todo>({
    useQueryHook: useGetUserTodosQuery,
    ItemComponent: ({item}) => <TodoCard todo={item}/>,
    className: styles.todos_elem,
});