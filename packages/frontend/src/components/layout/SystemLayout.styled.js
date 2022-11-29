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
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    width: 768px;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    padding: 0 32px 0 32px;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    width: 1280px;
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    padding: 0 16px 0 16px;
  }
`;

export const Sider = styled.div``;
