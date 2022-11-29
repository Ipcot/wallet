import * as React from 'react';
import {
  StatisticsTableStyle,
  StatisticsThLeft,
  StatisticsThRigth,
  StatisticsHead,
  StatisticsBody,
  StatisticsBodyLeft,
  StatisticsBodyRigth,
  StatisticsBodyicon,
} from './StatisticsTableStyle.styled';

const StatisticsTable = ({ operation }) => {
  return (
    <div>
      <StatisticsTableStyle>
        <StatisticsHead>
          <StatisticsThLeft>Operation</StatisticsThLeft>
          <StatisticsThRigth>Sum</StatisticsThRigth>
        </StatisticsHead>
        {operation.map(element => (
          <StatisticsBody key={element.id}>
            <StatisticsBodyLeft>
              <StatisticsBodyicon
                style={{ backgroundColor: `${element.color}` }}
              ></StatisticsBodyicon>
              {element.name}
            </StatisticsBodyLeft>
            <StatisticsBodyRigth>{element.sum}</StatisticsBodyRigth>
          </StatisticsBody>
        ))}
      </StatisticsTableStyle>
    </div>
  );
};

export default StatisticsTable;
