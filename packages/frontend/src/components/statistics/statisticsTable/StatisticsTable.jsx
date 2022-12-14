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

const StatisticsTable = ({ stats }) => {
  return (
    <div>
      <StatisticsTableStyle>
        <thead>
          <StatisticsHead>
            <StatisticsThLeft>Operation</StatisticsThLeft>
            <StatisticsThRigth>Sum</StatisticsThRigth>
          </StatisticsHead>
        </thead>
        <tbody>
          {stats.map(element => (
            <StatisticsBody key={element.color}>
              <StatisticsBodyLeft key={element.name}>
                <StatisticsBodyicon
                  style={{ backgroundColor: `${element.color}` }}
                ></StatisticsBodyicon>
                {element.name}
              </StatisticsBodyLeft>
              <StatisticsBodyRigth key={element.sum}>
                {element.sum}
              </StatisticsBodyRigth>
            </StatisticsBody>
          ))}
        </tbody>
      </StatisticsTableStyle>
    </div>
  );
};

export default StatisticsTable;
