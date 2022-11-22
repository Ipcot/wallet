import styled from '@emotion/styled';

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    min-width: ${p => p.theme.breakpoints[1]};
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: ${p => p.theme.breakpoints[2]};
  }
`;

export default Container;

export const ContainerMain = styled(Container)`
  background-color: ${p => p.theme.palette.colors.bg};
`;
