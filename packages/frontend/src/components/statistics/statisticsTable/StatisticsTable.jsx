import * as React from 'react';
import {
  StatisticsTableStyle,
  StatisticsThLeft,
  StatisticsThRigth,
  StatisticsHead,
  StatisticsBody,
  StatisticsBodyLeft,
  StatisticsBodyRigth,
} from './StatisticsTableStyle.styled';

const columns = [
  { field: 'operation', headerName: 'Operation' },
  {
    field: 'sum',
    headerName: 'Sum',
    // width: 140,
    type: 'number',
  },
];

const rows = [
  { id: 1, name: 'Hello', sum: 'World' },
  { id: 2, name: 'MUI X', sum: 'is awesome' },
  { id: 3, name: 'Material UI', sum: 'is amazing' },
  { id: 4, name: 'MUI', sum: '' },
  { id: 5, name: 'Joy UI', sum: 'is awesome' },
  { id: 6, name: 'MUI Base', sum: 'is amazing' },
];

const StatisticsTable = () => {
  return (
    <div>
      <StatisticsTableStyle>
        <StatisticsHead>
          <StatisticsThLeft>Operation</StatisticsThLeft>
          <StatisticsThRigth>Sum</StatisticsThRigth>
        </StatisticsHead>
        {rows.map(element => (
          <StatisticsBody key={element.id}>
            <StatisticsBodyLeft>{element.name}</StatisticsBodyLeft>
            <StatisticsBodyRigth>{element.sum}</StatisticsBodyRigth>
          </StatisticsBody>
        ))}
      </StatisticsTableStyle>
    </div>
  );
};

export default StatisticsTable;
