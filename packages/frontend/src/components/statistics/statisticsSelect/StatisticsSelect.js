import { SelectWrapper } from './SelectWrapper.styled';
import { StatisticsSelectStyle } from './StatisticsSelectStyle.styled';
import { FormControl, MenuItem } from '@mui/material';
import { useState } from 'react';
// import { ReactComponent as SelectIcon } from '../img/Vector.svg';
import { SelectIcon } from './SelectIcon.styled';

const StatisticsSelect = ({ operation }) => {
  const [year, setYear] = useState('2022');
  const [month, setMonth] = useState('November');

  const name = operation.map(element => element.name);
  const handleChangeYear = e => {
    setYear(e.target.value);
  };
  const handleChangeMonth = e => {
    setMonth(e.target.value);
  };

  return (
    <SelectWrapper>
      <FormControl fullWidth={true}>
        <SelectIcon />
        <StatisticsSelectStyle defaultValue={year} onChange={handleChangeYear}>
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
        </StatisticsSelectStyle>
      </FormControl>
      <FormControl fullWidth={true}>
        <SelectIcon />
        <StatisticsSelectStyle
          defaultValue={month}
          onChange={handleChangeMonth}
        >
          <MenuItem value={'November'}>November</MenuItem>
          <MenuItem value={'October '}>October </MenuItem>
          <MenuItem value={'September '}>September </MenuItem>
        </StatisticsSelectStyle>
      </FormControl>
    </SelectWrapper>
  );
};

export default StatisticsSelect;

// MuiSelect - select
// MuiSelect - outlined
// MuiInputBase - input
// MuiOutlinedInput - input
// css - dfve8h - MuiSelect - select - MuiInputBase - input - MuiOutlinedInput - input

// MuiSvgIcon - root
// MuiSvgIcon - fontSizeMedium
// MuiSelect - icon
// MuiSelect - iconOutlined
// css - hfutr2 - MuiSvgIcon - root - MuiSelect - icon
