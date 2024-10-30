import { lazy } from 'react';


const Dashboard = lazy(() => import('../pages/Dashboard'));

const NotFound = lazy(() => import('../pages/NotFound'));

let routes = {
    expense: [],
    default: [
        {
            path: '/login'
        },
        {
            path: '/logout'
        },
        {
            path: '/',
            element: <Dashboard />
        },
        {
            path: "*",
            element: <NotFound />,
        }
    ]

};

export default routes;