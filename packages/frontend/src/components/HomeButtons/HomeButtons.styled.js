import styled from 'styled-components';

export const ButtonsList = styled.ul`
  display: flex;
  justify-content: space-evenly;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    flex-direction: column;
  }
`;

export const ButtonsListItem = styled.li`
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    padding-bottom: 12px;
    &:last-child {
      padding-bottom: 0;
    }
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    padding-bottom: 12px;
    &:last-child {
      padding-bottom: 0;
    }
  }
`;

export const ButtonItem = styled.button`
  display: flex;
  align-items: center;
  border: none;
`;

export const ButtonsWrapper = styled.div`
  padding: 12px 0px;
  display: block;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    padding-top: 40px;
    padding-left: 32px;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    padding-top: 40px;
    padding-left: 16px;
  }
`;
