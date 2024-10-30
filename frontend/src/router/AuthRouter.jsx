import { Routes, Route } from 'react-router-dom';

import RegisterPage from '../pages/Register';
import LoginPage from '../pages/Login';

export default function AuthRouter() {
    return (
        <Routes>
            <Route element={<RegisterPage />} path='/' />
            <Route element={<LoginPage />} path='/login' />
        </Routes>
    )
}