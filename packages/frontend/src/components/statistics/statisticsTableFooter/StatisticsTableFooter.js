import {
  StatisticsTableFooterStyle,
  TableFooterTitle,
  TableFooterExpenses,
  TableFooterIncome,
} from './StatisticsTableFooter.styled';

const StatisticaTableFooter = ({ expensesMoney, isIncome }) => {
  return (
    <div>
      <StatisticsTableFooterStyle>
        <TableFooterTitle>Expenses:</TableFooterTitle>
        <TableFooterExpenses>{expensesMoney}</TableFooterExpenses>
      </StatisticsTableFooterStyle>
      <StatisticsTableFooterStyle>
        <TableFooterTitle>Income:</TableFooterTitle>
        <TableFooterIncome>{`${isIncome.toFixed(2)}`}</TableFooterIncome>
      </StatisticsTableFooterStyle>
    </div>
  );
};

export default StatisticaTableFooter;
