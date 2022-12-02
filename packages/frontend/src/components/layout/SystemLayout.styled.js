import styled from '@emotion/styled';

export const Container = styled.div`
  min-width: ${p => p.theme.breakpoints.values.sm};
  margin: 0 auto;

  @media (min-width: ${p => p.theme.breakpoints.values.md}) {
    min-width: ${p => p.theme.breakpoints.values.md};
  }

  @media (min-width: ${p => p.theme.breakpoints.values.lg}) {
    width: ${p => p.theme.breakpoints.values.lg};
  }
`;

export const MainContainer = styled(Container)`
  width: 320px;
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    width: 768px;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    gap: 20px;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 32px 0 32px;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    height: 100vh;
    width: 1280px;
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    padding: 0 16px 50px 16px;
    position: relative;
    &::after {
      position: absolute;
      content: '';
      left: 480px;
      bottom: 0;
      height: 100%;
      border-left: 1px solid #e7e5f2;
      box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
        1px 0px 0px rgba(255, 255, 255, 0.6);
    }
  }
`;

export const Sider = styled.div`
  border-right: 2px solid black;
`;
