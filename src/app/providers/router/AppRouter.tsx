import Header from "../../../widgets/LayoutHeader/Header.tsx";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import PostsPage from "../../../pages/PostsPage.tsx";
import PostPage from "../../../pages/PostPage/PostPage.tsx";
import UserAlbumsPage from "../../../pages/UserAlbumsPage/UserAlbumsPage.tsx";
import AlbumsPhotosPage from "../../../pages/AlbumsPhotosPage/AlbumsPhotosPage.tsx";
import UserTodosPage from "../../../pages/UserTodosPage/UserTodosPage.tsx";
import UserPostsPage from "../../../pages/UserPostsPage/UserPostsPage.tsx";
import UsersPage from "../../../pages/UsersPage.tsx";
import App from "../../App.tsx";
import UserIdPage from "../../../pages/UserIdPage/UserIdPage.tsx";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )

};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {index: true, element: <App />},
            {path: 'posts', element: <PostsPage />},
            {path: 'posts/:id', element: <PostPage />},
            {path: 'users', element: <UsersPage />},
            {
                path: 'users/:id',
                element: <UserIdPage />,
                children: [
                    {path: 'albums', element: <UserAlbumsPage />},
                    {path: 'todos', element: <UserTodosPage />},
                    {path: 'posts', element: <UserPostsPage />},
                ]
            },
            {path: 'albums/:id/photos', element: <AlbumsPhotosPage />},
        ],
    },
]);

const AppRouter = () => <RouterProvider router={router} />;
export default AppRouter;