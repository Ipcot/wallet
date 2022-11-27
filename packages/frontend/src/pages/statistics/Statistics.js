import { StatisticsTitle } from '../../components/statistics/statisticsTitle/StatisticsTitle.styled';
import { StatisticsContainer } from '../../components/statistics/statisticsContainer/StatisticsContainer.styled';
import userOperation from './userOperation.json';
import StatisticsDoughnut from '../../components/statistics/statisticsDoughnut/StatisticsDoughnut';
import StatisticsSelect from '../../components/statistics/statisticsSelect/StatisticsSelect';
import StatisticsTable from '../../components/statistics/statisticsTable/StatisticsTable';
import StatisticaTableFooter from 'components/statistics/statisticsTableFooter/StatisticsTableFooter';
import { StatisticsRight } from 'components/statistics/statisticsSelect/StatisticsRight.styled';
import { StatisticsSection } from 'components/statistics/StatisticsSection/StatisticsSection.styled';

const Statistics = () => {
  return (
    <StatisticsSection>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <StatisticsContainer>
        <StatisticsDoughnut operation={userOperation} />
        <StatisticsRight>
          <StatisticsSelect operation={userOperation} />
          <StatisticsTable />
          <StatisticaTableFooter />
        </StatisticsRight>
      </StatisticsContainer>
    </StatisticsSection>
  );
};
export default Statistics;
