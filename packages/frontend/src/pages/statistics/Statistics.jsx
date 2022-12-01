import { useDispatch, useSelector } from 'react-redux';

import { StatisticsTitle } from '../../components/statistics/statisticsTitle/StatisticsTitle.styled';
import { StatisticsContainer } from '../../components/statistics/statisticsContainer/StatisticsContainer.styled';
import StatisticsDoughnut from '../../components/statistics/statisticsDoughnut/StatisticsDoughnut';
import StatisticsSelect from '../../components/statistics/statisticsSelect/StatisticsSelect';
import StatisticsTable from '../../components/statistics/statisticsTable/StatisticsTable';
import StatisticaTableFooter from 'components/statistics/statisticsTableFooter/StatisticsTableFooter';
import { StatisticsRight } from 'components/statistics/statisticsSelect/StatisticsRight.styled';
import { StatisticsSection } from 'components/statistics/StatisticsSection/StatisticsSection.styled';

import {
  transactionsOperations,
  transactionsSelectors,
} from '../../store/transactions';

import {
  StatisticsMessage,
  StatisticsMessageTitle,
} from 'components/statistics/StatisticsMessage/StatisticsMessage.styled';

const Statistics = () => {
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

  const expense = stats.sorted.filter(element => element.name != 'Main');

  return (
    <StatisticsSection>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <StatisticsContainer>
        {stats.expense === 0 ? (
          <StatisticsMessage>
            <StatisticsMessageTitle>
              You have no expenses
            </StatisticsMessageTitle>
          </StatisticsMessage>
        ) : (
          <StatisticsDoughnut operation={expense} />
        )}

        <StatisticsRight>
          <StatisticsSelect getDate={getDate} />
          <StatisticsTable stats={expense} />
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
