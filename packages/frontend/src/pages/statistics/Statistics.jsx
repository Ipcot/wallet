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
import {
  StatisticsMassage,
  StatisticsMassageTitle,
} from 'components/statistics/StatisticsMassage/StatisticsMassage.styled';

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

  return (
    <StatisticsSection>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <StatisticsContainer>
        {/* {stats.expense === 0 ? (
          <StatisticsMassage>
            <StatisticsMassageTitle>
              You have no expenses
            </StatisticsMassageTitle>
          </StatisticsMassage>
        ) : ( */}
        <StatisticsDoughnut
          operation={stats.sorted}
          // getExpenses={getExpenses}
        />
        {/* )} */}

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
