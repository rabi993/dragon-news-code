
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import CategoryNews from '../pages/CategoryNews';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/register';
import NewsDetails from '../pages/NewsDetails';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                element: <Navigate to="category/01" replace />,
            },
            {
                path: "category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: ({params}) =>
                    fetch(
                        `https://openapi.programming-hero.com/api/news/category/${params.id}`
                    ),
            },
        ],
    },
    {
        path: "/news/:_id",
        element: <NewsDetails></NewsDetails> ,
        loader: ({params}) =>
            fetch(`https://openapi.programming-hero.com/api/news/${params._id}`),
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register> ,
            }
        ]
    },
    {
        path: "*",
        element: <h1>Error</h1>,
    },
]);

export default router;