import styled from '@emotion/styled';
import { DataGrid } from '@mui/x-data-grid';
import themeMaterial from 'theme/themeMaterial';

export const StatisticsTableStyle = styled.div`
  height: 400px;
  width: 280px;
  margin-top: 32px;
`;

export const StyledDataGrid = styled(DataGrid)({
  border: 'none',

  '& .MuiDataGrid-main': {
    padding: '0 20px 0 20px ',
  },
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: `#ffffff`,
    borderRadius: `${themeMaterial.radii.large}`,
    display: 'flex',
    justifyContent: 'center',
  },
  '& .MuiDataGrid-columnSeparator--sideRight': {
    display: 'none',
  },
  '& .MuiDataGrid-columnHeaderTitle': {
    fontFamily: `${themeMaterial.fonts.body}`,
    fontStyle: 'normal',
    fontWeight: `${themeMaterial.fontWeights.bold}`,
    fontSize: `${themeMaterial.fontSizes.m}`,
    lineHeight: `${themeMaterial.lineHeights.heading}`,
  },
  '& .MuiDataGrid-row': {
    fontFamily: `${themeMaterial.fonts.body}`,
    fontStyle: 'normal',
    fontWeight: `${themeMaterial.fontWeights.normal}`,
    fontSize: `${themeMaterial.fontSizes.s}`,
    lineHeight: 1.125,
    color: '#000000',
  },
});
