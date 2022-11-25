import { StatisticsTitle } from '../../components/statistics/statisticsTitle/StatisticsTitle.styled';
import { StatisticsContainer } from '../../components/statistics/statisticsContainer/StatisticsContainer.styled';
import userOperation from './userOperation.json';
import StatisticsDoughnut from '../../components/statistics/statisticsDoughnut/StatisticsDoughnut';
import StatisticsSelect from '../../components/statistics/statisticsSelect/StatisticsSelect';
import StatisticsTable from '../../components/statistics/statisticsTable/StatisticsTable';
import StatisticaTableFooter from 'components/statistics/statisticsTableFooter/StatisticsTableFooter';

const Statistics = () => {
  return (
    <div>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <StatisticsContainer>
        <StatisticsDoughnut operation={userOperation} />
        <div>
          <StatisticsSelect operation={userOperation} />
          <StatisticsTable />
          <StatisticaTableFooter />
        </div>
      </StatisticsContainer>
    </div>
  );
};
export default Statistics;
