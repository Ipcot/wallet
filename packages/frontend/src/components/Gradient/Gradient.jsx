import styled from '@emotion/styled';
import background from '../currency/img/Vector.png';

const GradientBox = styled.div`
  /* background-color: #4a56e2; */
  background-image: url('../currency/img/Vector.png');
  width: 100%;
  height: 134px;
  position: absolute;
  bottom: 0px;
  background-repeat: no-repeat;
  background-size: contain;
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    height: 119px;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    height: 134px;
  }
`;

const Gradient = () => {
  return (
    <GradientBox style={{ backgroundImage: `url(${background})` }}>
      {/* <image src={'../currency/img/Vector.png'} alt={'image'} /> */}
    </GradientBox>
  );
};

export default Gradient;
