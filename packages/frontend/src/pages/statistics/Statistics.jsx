import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { StatisticsTitle } from '../../components/statistics/statisticsTitle/StatisticsTitle.styled';
import { StatisticsContainer } from '../../components/statistics/statisticsContainer/StatisticsContainer.styled';
import userOperation from './userOperation.json';
import operation from '../../constants/operation.json';
import StatisticsDoughnut from '../../components/statistics/statisticsDoughnut/StatisticsDoughnut';
import StatisticsSelect from '../../components/statistics/statisticsSelect/StatisticsSelect';
import StatisticsTable from '../../components/statistics/statisticsTable/StatisticsTable';
import StatisticaTableFooter from 'components/statistics/statisticsTableFooter/StatisticsTableFooter';
import { StatisticsRight } from 'components/statistics/statisticsSelect/StatisticsRight.styled';
import { StatisticsSection } from 'components/statistics/StatisticsSection/StatisticsSection.styled';

import {
  transactionsOperations,
  transactionsSelectors,
  contactsSelectors,
} from '../../store/transactions';

const Statistics = () => {
  const [expensesMoney, setExpensesMoney] = useState('');
  const [transactionsDate, setTransactionsDate] = useState({});
  const getDate = ({ year, month }) => {
    setTransactionsDate({ year, month });
  };

  const dispatch = useDispatch(
    transactionsOperations.fetchTransactionsByCategory
  );
  const { transactions } = useSelector(
    transactionsSelectors.getAllTransactions
  );
  useEffect(() => {
    // const { year, month } = transactionsDate;
    dispatch(transactionsOperations.fetchTransactions());
  }, [dispatch]);
  const getExpenses = expenses => {
    setExpensesMoney(expenses);
  };
  const { year, month } = transactionsDate;
  const expenseTransactions = transactions.data.filter(
    t => t.isIncome === false
  );
  const sortByDate = expenseTransactions.filter(
    element => element.year === year && element.month === month
  );

  const expensesArray = sortByDate;

  const sortedExpensesByCategory = operation.map(category => {
    const sumByCategory = expensesArray.reduce((acc, el) => {
      return acc + (el.category === category.name ? el.sum : 0);
    }, 0);
    return {
      name: category.name,
      sum: sumByCategory,
      color: category.color,
    };
  });
  const incomExpenseSum = transactions.data
    .filter(t => t.isIncome === true)
    .map(t => t.sum)
    .reduce((acc, num) => {
      return acc + num;
    }, 0);

  return (
    <StatisticsSection>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <StatisticsContainer>
        <StatisticsDoughnut
          operation={sortedExpensesByCategory}
          getExpenses={getExpenses}
        />
        <StatisticsRight>
          <StatisticsSelect getDate={getDate} />
          <StatisticsTable operation={sortedExpensesByCategory} />
          <StatisticaTableFooter
            expensesMoney={expensesMoney}
            isIncome={incomExpenseSum}
          />
        </StatisticsRight>
      </StatisticsContainer>
    </StatisticsSection>
  );
};
export default Statistics;
