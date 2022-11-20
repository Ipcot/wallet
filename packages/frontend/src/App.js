import { Suspense } from 'react';
import Pages from './pages'
import Loader from 'components/layout/Loader';


function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader/>}>
        <Pages />
      </Suspense>
    </div>
  );
}

export default App;
