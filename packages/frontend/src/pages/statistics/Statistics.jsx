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
  const stats = useSelector(
    transactionsSelectors.getTransactionsSortedByCategory
  );
  const dispatch = useDispatch();

  const getDate = (year, month) => {
    dispatch(
      transactionsOperations.fetchTransactionsByCategory({
        year,
        month,
      })
    );
  };

  console.log(stats.sorted);

  // console.log(stats);
  // const { transactions } = useSelector(
  //   transactionsSelectors.getTransactionsSortedByCategory
  // );
  // useEffect(() => {
  //   const { year, month } = transactionsDate;

  //   dispatch(
  //     transactionsOperations.fetchTransactionsByCategory({ year, month })
  //   );
  // }, [dispatch, transactionsDate]);
  // console.log(transactions);
  // const getExpenses = expenses => {
  //   setExpensesMoney(expenses);
  // };
  // const { year, month } = transactionsDate;
  // const expenseTransactions = transactions.data.filter(
  //   t => t.isIncome === false
  // );
  // const sortByDate = expenseTransactions.filter(
  //   element => element.year === year && element.month === month
  // );

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
        {stats.expense === 0 ? (
          <StatisticsMassage>
            <StatisticsMassageTitle>
              You have no expenses
            </StatisticsMassageTitle>
          </StatisticsMassage>
        ) : (
          <StatisticsDoughnut
            operation={stats.sorted}
            // getExpenses={getExpenses}
          />
        )}

        <StatisticsRight>
          <StatisticsSelect getDate={getDate} />
          <StatisticsTable stats={stats.sorted} />
          <StatisticaTableFooter
            expensesMoney={stats.expense}
            isIncome={stats.income}
          />
        </StatisticsRight>
      </StatisticsContainer>
    </StatisticsSection>
  );
};
export default Statistics;
