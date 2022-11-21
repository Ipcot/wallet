import { Suspense } from 'react';
import { Outlet } from 'react-router';
import Sider from '../HomeAside/Sider';
import Header from './common/Header/Header';
import Loader from './Loader';
import {
  Container,
  Sider as SiderComponent,
  MainContainer,
} from './SystemLayout.styled';
// import TestMUIComponents from 'components/test';

const SystemLayout = () => {
  return (
    <div>
      <Container>
        <Header />
      </Container>
      <main>
        <MainContainer>
          <Sider>
            <SiderComponent />
          </Sider>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </MainContainer>
        {/* <TestMUIComponents /> */}
      </main>
    </div>
  );
};

export default SystemLayout;
