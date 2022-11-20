import { Suspense } from 'react';
import Pages from './pages';
import Loader from 'components/layout/Loader';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>Wallet</title>
          <meta name="description" content="Wallet application" />
        </Helmet>
        <Suspense fallback={<Loader />}>
          <Pages />
        </Suspense>
      </div>
    </HelmetProvider>
  );
}

export default App;
