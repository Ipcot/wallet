import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import * as React from 'react';
import Operation from '../../../pages/statistics/userOperation.json';
import {
  StatisticsTableStyle,
  StyledDataGrid,
} from './StatisticsTableStyle.styled';

// const columns= [
//   {
//     field: 'name',
//     headerName: 'Operation',
//     // editable: true,
//   },
//   {
//     field: 'money',
//     headerName: 'Sum',
//     // editable: true,
//   },
// ];

const columns = [
  { field: 'name', headerName: 'Operation' },
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
    <StatisticsTableStyle>
      <StyledDataGrid
        disableColumnMenu
        // hideFooter
        autoPageSize
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        // disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </StatisticsTableStyle>
  );
};

export default StatisticsTable;
