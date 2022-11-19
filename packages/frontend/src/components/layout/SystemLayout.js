import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

import Header from "./Header"
import Loader from './Loader'
import { Container, Sider, MainContainer } from './SystemLayout.styled'
import TestMUIComponents from 'components/test'

const SystemLayout = () => {
  return <div>
    <Container>
      <Header />
    </Container>

    <main>
      <MainContainer>
        <Sider>
          <NavLink to={'home'}>Home</NavLink>
          <NavLink to={'statistics'}>Statistics</NavLink>

          <TestMUIComponents />

          <div style={{ background: "yellow", marginTop: 100 }}>Balance component: 24 000.00</div>
          <div style={{ background: "lightblue" }}>Currencies course: USD EUR UAH</div>
        </Sider>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainContainer>
    </main>
  </div>
}

export default SystemLayout;
