import { lazy, Suspense,  } from 'react';

import { useSelector } from 'react-redux';
import { selectAuth } from '../redux/auth/selectors';
import { AppContextProvider } from '../context/appContext';
import PageLoader from '../components/PageLoader';
import AuthRouter from '../router/AuthRouter';
import Localization from '../locale/Localization';

const ErpApp = lazy(() => import('./CrmApp'));

const DefaultApp = () => (
  <Localization>
    <AppContextProvider>
      <Suspense fallback={<PageLoader />}>
        <ErpApp />
      </Suspense>
    </AppContextProvider>
  </Localization>
);

export default function Accufirm() {
  const { isLoggedIn } = useSelector(selectAuth);

  if (!isLoggedIn)
    return (
      <Localization>
        <AuthRouter />
      </Localization>
    );
  else {
    return <DefaultApp />;
  }
}
