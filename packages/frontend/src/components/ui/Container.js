import styled from '@emotion/styled';

export const Container = styled.div`
  width: 320px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 60px 117px 196px 118px;
    background-color: green;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 76px;
    padding-left: 91px;
    background-color: green;
  }
`;
