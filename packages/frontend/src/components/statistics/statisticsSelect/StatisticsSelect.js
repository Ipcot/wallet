import { SelectWrapper } from './SelectWrapper.styled';
import { useEffect, useState } from 'react';
import {
  StatisticsContainer,
  StatisticsOptions,
  StatisticsSelectStyle,
} from './StatisticsSelectStyle.styled';

const yaerArray = [2022, 2021, 2020];
const monArray = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
let date = new Date(Date.now());

const StatisticsSelect = ({ operation }) => {
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(monArray[date.getMonth()]);

  const name = operation.map(element => element.name);

  const handleChange = e => {
    if (e.target.name === 'month') {
      setMonth(e.target.value);
    }
    if (e.target.name === 'year') {
      setYear(e.target.value);
    }
  };

  return (
    <SelectWrapper>
      <StatisticsContainer>
        <StatisticsSelectStyle
          onChange={handleChange}
          defaultValue={month}
          name={'month'}
        >
          {monArray.map(element => (
            <StatisticsOptions key={element}>{element}</StatisticsOptions>
          ))}
        </StatisticsSelectStyle>
      </StatisticsContainer>
      <StatisticsContainer>
        <StatisticsSelectStyle
          onChange={handleChange}
          defaultValue={year}
          name={'year'}
        >
          {yaerArray.map(element => (
            <StatisticsOptions key={element}>{element}</StatisticsOptions>
          ))}
        </StatisticsSelectStyle>
      </StatisticsContainer>
    </SelectWrapper>
  );
};

export default StatisticsSelect;
