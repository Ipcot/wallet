import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'store/auth';

import {
  BalanceWrapper,
  BalanceTitle,
  BalanceValue,
} from './CurrentBalance.styled';

const CurrentBalance = () => {
  const dispatch = useDispatch();

  const user = useSelector(authSelectors.getUser);
  const balance = user?.balance;

  // console.log(user);
  // console.log(balance);

  // endless re-render

  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // }, [dispatch]);

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
