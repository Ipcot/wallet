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
        <thead>
          <StatisticsHead>
            <StatisticsThLeft>Operation</StatisticsThLeft>
            <StatisticsThRigth>Sum</StatisticsThRigth>
          </StatisticsHead>
        </thead>
        <tbody>
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
        </tbody>
      </StatisticsTableStyle>
    </div>
  );
};

export default StatisticsTable;
