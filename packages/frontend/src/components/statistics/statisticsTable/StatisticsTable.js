import * as React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Operation from '../../../pages/statistics/userOperation.json';

const columns = [
  {
    field: 'name',
    headerName: 'Operation',
    // width: '50%',
    editable: true,
  },
  {
    field: 'money',
    headerName: 'Sum',
    // width: '50%',
    editable: true,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const StatisticsTable = () => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        disableColumnMenu
        autoPageSize
        rows={Operation}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        // disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default StatisticsTable;
