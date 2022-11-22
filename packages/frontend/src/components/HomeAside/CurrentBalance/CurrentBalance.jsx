import {
  BalanceWrapper,
  BalanceTitle,
  BalanceValue,
} from './CurrentBalance.styled';

const CurrentBalance = () => {
  return (
    <BalanceWrapper>
      <BalanceTitle>Your balance</BalanceTitle>
      <BalanceValue>$24 000.00</BalanceValue>
    </BalanceWrapper>
  );
};

export default CurrentBalance;
