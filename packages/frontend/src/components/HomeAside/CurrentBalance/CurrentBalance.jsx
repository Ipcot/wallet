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
  const allTransaction = useSelector(contactsSelectors.getAllTransactions);
  useEffect(() => {
    dispatch(transactionsOperations.fetchTransactions());
  }, [dispatch]);
  // console.log(allTransaction.data);
  // // if()
  // if (
  //   // allTransaction &&
  //   // allTransaction.transactions &&
  //   // allTransaction.data &&
  //   allTransaction.data.length >= 0
  // ) {
  //   const lastTransaction = allTransaction.data[0];
  //   balance = lastTransaction.balance.toFixed(2);
  // }

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
