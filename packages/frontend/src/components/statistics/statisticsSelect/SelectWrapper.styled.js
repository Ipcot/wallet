import styled from '@emotion/styled';

export const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    /* width: 336px; */
    flex-direction: row;
    gap: 16px;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
  }
`;
