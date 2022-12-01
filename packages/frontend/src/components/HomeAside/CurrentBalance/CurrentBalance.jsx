import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsSelectors from 'store/transactions/transactionsSelectors';
import transactionsOperations from 'store/transactions/transactionsOperations';
import {
  BalanceWrapper,
  BalanceTitle,
  BalanceValue,
} from './CurrentBalance.styled';

const CurrentBalance = () => {
  let balance = 0;
  const dispatch = useDispatch();
  const allTransaction = useSelector(contactsSelectors.getAllTransactions);
  useEffect(() => {
    dispatch(transactionsOperations.fetchTransactions());
  }, [dispatch]);
  console.log(allTransaction.data);

  if (
    // allTransaction &&
    // allTransaction.transactions &&
    // allTransaction.data &&
    allTransaction.data.length > 0
  ) {
    const lastTransaction = allTransaction.data[0];
    balance = lastTransaction.balance.toFixed(2);
  }

  return (
    <BalanceWrapper>
      <BalanceTitle>Your balance</BalanceTitle>
      <BalanceValue>&#x20b4; {balance}</BalanceValue>
    </BalanceWrapper>
  );
};

export default CurrentBalance;
