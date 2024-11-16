
import './style/app.css'

import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import PageLoader from './components/PageLoader';
import store from './redux/store';

const Accufirm = lazy(() => import('./apps/Accufirm.jsx'));

export default function RoutApp() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Suspense fallback={<PageLoader />}>
                    <Accufirm />
                </Suspense>
            </Provider>
        </BrowserRouter>
    )
}