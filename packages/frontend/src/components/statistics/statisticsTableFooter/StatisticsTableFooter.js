import {
  StatisticsTableFooterStyle,
  TableFooterTitle,
  TableFooterExpenses,
  TableFooterIncome,
} from './StatisticsTableFooter.styled';

const StatisticaTableFooter = () => {
  return (
    <div>
      <StatisticsTableFooterStyle>
        <TableFooterTitle>Expenses:</TableFooterTitle>
        <TableFooterExpenses>22 549.24</TableFooterExpenses>
      </StatisticsTableFooterStyle>
      <StatisticsTableFooterStyle>
        <TableFooterTitle>Income:</TableFooterTitle>
        <TableFooterIncome>27 350.00</TableFooterIncome>
      </StatisticsTableFooterStyle>
    </div>
  );
};

export default StatisticaTableFooter;
