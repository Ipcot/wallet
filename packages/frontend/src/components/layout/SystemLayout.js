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

const SystemLayout = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <MainContainer>
        <Sider>
          <SiderComponent />
        </Sider>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainContainer>
    </>
  );
};

export default SystemLayout;
