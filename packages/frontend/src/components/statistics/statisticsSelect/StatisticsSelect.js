import { SelectWrapper } from './SelectWrapper.styled';
import { useEffect, useState } from 'react';
import {
  SelectIconWrapper,
  SelectStyle,
  StatisticsContainer,
  StatisticsOptions,
  StatisticsSelectStyle,
} from './StatisticsSelectStyle.styled';
import { Select, FormControl, MenuItem } from '@mui/material';

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

const StatisticsSelect = ({ getDate }) => {
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(`${monArray[date.getMonth()]}`);

  const handleChange = e => {
    if (e.target.name === 'month') {
      setMonth(e.target.value);
    }
    if (e.target.name === 'year') {
      setYear(e.target.value);
    }
  };

  useEffect(() => {
    const monthNumber = monArray.indexOf(month) + 1;
    getDate(year, monthNumber);
  }, [year, month]);

  return (
    <SelectWrapper>
      {/* <FormControl fullWidth> */}
      <SelectIconWrapper>
        <SelectStyle
          id="demo-simple-select"
          defaultValue={month}
          value={month}
          name="month"
          onChange={handleChange}
          variant="outlined"
        >
          {monArray.map(element => (
            <MenuItem key={element} value={element}>
              {element}
            </MenuItem>
          ))}
        </SelectStyle>
      </SelectIconWrapper>
      <SelectIconWrapper>
        <SelectStyle
          id="demo-simple-select"
          defaultValue={year}
          value={year}
          name="year"
          onChange={handleChange}
        >
          {yaerArray.map(element => (
            <MenuItem key={element} value={element}>
              {element}
            </MenuItem>
          ))}
        </SelectStyle>
      </SelectIconWrapper>
      {/* </FormControl> */}
      {/* <StatisticsContainer>
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
      </StatisticsContainer> */}
    </SelectWrapper>
  );
};

export default StatisticsSelect;
