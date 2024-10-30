import { lazy } from 'react';


const Dashboard = lazy(() => import('../pages/Dashboard'));


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
        }
    ]

};

export default routes;