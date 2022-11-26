import styled from '@emotion/styled';
import { DataGrid } from '@mui/x-data-grid';
import themeMaterial from 'theme/themeMaterial';

export const StatisticsTableStyle = styled.div`
  height: 400px;
  width: 280px;
  margin-top: 32px;
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    width: 336px;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    width: 395px;
  }
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
  '& .MuiDataGrid-columnHeadersInner': {
    width: '395px',
  },
  '& .MuiDataGrid-columnHeaderRow': {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  '& ..MuiDataGrid-columnHeaderDraggableContainer': {
    width: '197px',
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
    width: '395px',
  },
  '& .MuiDataGrid-cell': {
    // display: 'none',
    // width: '197px',
  },
});
