import { Suspense } from 'react';
import { Outlet } from 'react-router';

import Header from './common/Header/Header';
import Container from './common/Container/Container';
import Loader from './loader/Loader';

const SystemLayout = () => {
  return (
    <Container>
      <Suspense fallback={<Loader />}>
        <Header />
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SystemLayout;
