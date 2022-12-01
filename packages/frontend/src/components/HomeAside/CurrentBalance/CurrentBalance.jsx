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
  // const [balance, setBalance] = useState(second)
  const dispatch = useDispatch();
  const User = useSelector(authSelectors.getUser);
  // dispatch(authOperations.fetchCurrentUser());

  console.log(User);

  return (
    <BalanceWrapper>
      <BalanceTitle>Your balance</BalanceTitle>
      <BalanceValue>
        &#x20b4;
        <span
          style={{
            color: User.balance > 0 ? '#000000' : '#FF6596',
          }}
        >
          {User.balance}
        </span>
      </BalanceValue>
    </BalanceWrapper>
  );
};

export default CurrentBalance;
