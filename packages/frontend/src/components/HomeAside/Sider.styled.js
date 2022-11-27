import styled from '@emotion/styled';

export const AsideWrapper = styled.div`
  width: ${p => p.theme.breakpoints.values.sm};
  /* padding-top: 8px; */
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    /* width: 50%; */

    /* margin-right: ${p => p.theme.space[5]}px; */
  }
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    margin-right: 70px;
    /* width: 50%; */
  }
`;

export const SydeBarWrapper = styled.div`
  /* padding: 15px 40px; */
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    display: flex;
    gap: 32px;
    /* height: 182px; */
  }
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    flex-direction: column;
    gap: 32px;
    border: 1px solid #e7e5f2;
    box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
      1px 0px 0px rgba(255, 255, 255, 0.6);
  }
`;
