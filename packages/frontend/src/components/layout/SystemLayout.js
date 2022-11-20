import { Suspense } from 'react';
import { Outlet } from 'react-router';

import Header from './common/Header/Header';
import Container, { ContainerMain } from './common/Container/Container';
import Loader from './loader/Loader';

const SystemLayout = () => {
  return (
    <div>
      <Container>
        <Header />
      </Container>
      <ContainerMain>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </ContainerMain>
    </div>
  );
};

export default SystemLayout;
