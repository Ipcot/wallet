import { Suspense, useEffect } from 'react';
import Pages from './pages';
import Loader from 'components/layout/Loader';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import operations from 'store/auth/authOperations';

function App() {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <HelmetProvider>
          <div className="App">
            <Helmet>
              <title>Wallet</title>
              <meta name="description" content="Wallet application" />
            </Helmet>
            <Suspense fallback={null}>
              <Pages />
            </Suspense>
            <ToastContainer />
          </div>
        </HelmetProvider>
      )}
    </>
  );
}

export default App;
