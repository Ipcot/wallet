import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'store/auth';
import {
  transactionsSelectors,
  transactionsOperations,
} from 'store/transactions';

import {
  BalanceWrapper,
  BalanceTitle,
  BalanceValue,
} from './CurrentBalance.styled';

const CurrentBalance = () => {
  const balance = useSelector(transactionsSelectors.getBalance);

  return (
    <BalanceWrapper>
      <BalanceTitle>Your balance</BalanceTitle>
      <BalanceValue>
        &#x20b4;
        <span
          style={{
            color: balance > 0 ? '#000000' : '#FF6596',
          }}
        >
          {balance}
        </span>
      </BalanceValue>
    </BalanceWrapper>
  );
};

export default CurrentBalance;
