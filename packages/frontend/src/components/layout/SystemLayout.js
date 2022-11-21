import { Suspense } from 'react';
import { Outlet } from 'react-router';

import Header from './common/Header/Header';
import Loader from './Loader';
import { Container, Sider, MainContainer } from './SystemLayout.styled';
import TestMUIComponents from 'components/test';

const SystemLayout = () => {
  return (
    <div>
      <Container>
        <Header />
      </Container>
      <main>
        <MainContainer>
          <Sider>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Sider>
        </MainContainer>
        <TestMUIComponents />
      </main>
    </div>
  );
};

export default SystemLayout;
