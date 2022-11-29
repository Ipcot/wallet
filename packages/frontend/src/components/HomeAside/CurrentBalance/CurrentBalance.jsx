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

  if (
    allTransaction &&
    allTransaction.transactions &&
    allTransaction.transactions.data &&
    allTransaction.transactions.data.length > 0
  ) {
    const lastTransaction = allTransaction.transactions.data[0];
    balance = lastTransaction.balance;
  }

  return (
    <BalanceWrapper>
      <BalanceTitle>Your balance</BalanceTitle>
      <BalanceValue>&#x20b4; {balance}</BalanceValue>
    </BalanceWrapper>
  );
};

export default CurrentBalance;
