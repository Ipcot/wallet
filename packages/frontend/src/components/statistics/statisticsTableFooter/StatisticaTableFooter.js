import {
  StatisticaTableFooterStyle,
  TableFooterTitle,
  TableFooterExpenses,
  TableFooterIncome,
} from './StatisticaTableFooter.styles';

const StatisticaTableFooter = () => {
  return (
    <div>
      <StatisticaTableFooterStyle>
        <TableFooterTitle>Expenses:</TableFooterTitle>
        <TableFooterExpenses>22 549.24</TableFooterExpenses>
      </StatisticaTableFooterStyle>
      <StatisticaTableFooterStyle>
        <TableFooterTitle>Income:</TableFooterTitle>
        <TableFooterIncome>27 350.00</TableFooterIncome>
      </StatisticaTableFooterStyle>
    </div>
  );
};

export default StatisticaTableFooter;
