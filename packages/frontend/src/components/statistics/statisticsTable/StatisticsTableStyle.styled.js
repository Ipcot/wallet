import styled from '@emotion/styled';

export const StatisticsTableStyle = styled.table`
  height: 400px;
  width: 280px;
  margin-top: 32px;
  border-spacing: 0;

  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    width: 336px;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    width: 395px;
  }
`;

export const StatisticsHead = styled.tr`
  display: flex;
  justify-content: space-between;
  /* width: 280px; */
  border-radius: 30px;
  background-color: #ffff;
  font-family: ${p => p.theme.fonts.h2};
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
`;

export const StatisticsThLeft = styled.th`
  /* display: flex;
  justify-content: flex-start; */
  /* border-radius: 30px; */
  padding-top: 16px;
  padding-bottom: 15px;
  padding-left: 20px;
`;
export const StatisticsThRigth = styled.th`
  /* display: flex;
  justify-content: flex-end; */
  padding-top: 16px;
  padding-bottom: 15px;
  padding-right: 20px;
`;

export const StatisticsBody = styled.tr`
  display: flex;
  justify-content: space-between;
  padding: 18px 20px 16px 18px;
  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  font-family: ${p => p.theme.fonts.body};
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #000000;
`;
export const StatisticsBodyLeft = styled.td`
  /* display: flex;
  justify-content: flex-start; */
  /* border-radius: 30px; */
  /* padding-left: 20px; */
  /* border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6); */
  /* transform: rotate(-90deg); */
`;
export const StatisticsBodyRigth = styled.td`
  /* display: flex;
  justify-content: flex-end; */
  /* padding-right: 20px; */
  /* border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6); */
`;

// export const StyledDataGrid = styled(DataGrid)({
//   border: 'none',

//   '& .MuiDataGrid-main': {
//     padding: '0 20px 0 20px ',
//   },
//   '& .MuiDataGrid-columnHeaders': {
//     backgroundColor: `#ffffff`,
//     borderRadius: `${themeMaterial.radii.large}`,
//     display: 'flex',
//     justifyContent: 'center',
//   },
//   '& .MuiDataGrid-columnHeadersInner': {
//     width: '395px',
//   },
//   '& .MuiDataGrid-columnHeaderRow': {
//     width: '100%',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   '& ..MuiDataGrid-columnHeaderDraggableContainer': {
//     width: '197px',
//   },
//   '& .MuiDataGrid-columnSeparator--sideRight': {
//     display: 'none',
//   },
//   '& .MuiDataGrid-columnHeaderTitle': {
//     fontFamily: `${themeMaterial.fonts.body}`,
//     fontStyle: 'normal',
//     fontWeight: `${themeMaterial.fontWeights.bold}`,
//     fontSize: `${themeMaterial.fontSizes.m}`,
//     lineHeight: `${themeMaterial.lineHeights.heading}`,
//   },
//   '& .MuiDataGrid-row': {
//     fontFamily: `${themeMaterial.fonts.body}`,
//     fontStyle: 'normal',
//     fontWeight: `${themeMaterial.fontWeights.normal}`,
//     fontSize: `${themeMaterial.fontSizes.s}`,
//     lineHeight: 1.125,
//     color: '#000000',
//     width: '395px',
//   },
//   '& .MuiDataGrid-cell': {
//     // display: 'none',
//     // width: '197px',
//   },
// });
