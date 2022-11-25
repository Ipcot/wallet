import Media from 'react-media';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import styled from '@emotion/styled';

function createData(date, type, category, comment, sum, balance) {
  return { date, type, category, comment, sum, balance };
}

const datas = [
  createData('01.05.2020', '-', 'Other', 'eat', 300.0, 6900.0),
  createData('02.05.2020', '+', 'Other', 'salary', 900.0, 6900.0),
  createData('03.05.2020', '-', 'Other', 'food', 1500.0, 6900.0),
  createData('04.05.2020', '+', 'Other', 'sport', 250.0, 6900.0),
  createData('05.05.2020', '-', 'Other', 'gift', 3000.0, 6900.0),
];

const Home = () => {
  const cardRender = () => {
    const card =
      datas &&
      datas.map(data => {
        return (
          <CardConteiner sx={{ minWidth: 280 }} typeTr={data.type}>
            <CardBox>
              <TypographyCard>
                Date <Span>{data.date}</Span>
              </TypographyCard>
              <TypographyCard>
                Type <Span>{data.type}</Span>
              </TypographyCard>
              <TypographyCard>
                Category <Span>{data.category}</Span>
              </TypographyCard>
              <TypographyCard>
                Comment <Span>{data.comment}</Span>
              </TypographyCard>
              <TypographyCard>
                Sum <Span typeTr={data.type}>{data.sum}</Span>
              </TypographyCard>
              <TypographyCard>
                Balance <Span>{data.balance}</Span>
              </TypographyCard>
            </CardBox>
          </CardConteiner>
        );
      });
    return card;
  };

  return (
    <>
      {datas.length ? (
        <Media queries={{ small: '(max-width: 767px)' }}>
          {matches =>
            matches.small ? (
              cardRender()
            ) : (
              <TableContainer>
                <Table sx={{ minWidth: 704 }}>
                  <TableHead>
                    <TableRow
                      sx={{
                        overflow: 'hidden',
                        backgroundColor: '#FFF',
                        borderRadius: 1.5,
                      }}
                    >
                      <THead sx={{ borderRadius: 1.5 }}>Date</THead>
                      <THead align="center">Type</THead>
                      <THead align="left">Category</THead>
                      <THead align="left">Comment</THead>
                      <THead align="right">Sum</THead>
                      <THead align="right">Balance</THead>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {datas.map(data => (
                      <TableRow
                        key={data.date}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <Cell>{data.date}</Cell>
                        <Cell align="center">{data.type}</Cell>
                        <Cell align="left">{data.category}</Cell>
                        <Cell align="left">{data.comment}</Cell>
                        <Cell align="right">{data.sum}</Cell>
                        <Cell align="center">{data.balance}</Cell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )
          }
        </Media>
      ) : null}
    </>
  );
};
export default Home;

const CardConteiner = styled.div`
  width: 100%;
  background-color: #fff;
  margin-bottom: 8px;
  border-radius: 10px;

  border-left: 5px solid
    ${p => {
      switch (p.typeTr) {
        case '-':
          return '#FF6596';
        case '+':
          return '#24CCA7';
        default:
          return ``;
      }
    }};
`;

const CardBox = styled.div`
  padding: 12px 20px 8px;
`;

const TypographyCard = styled.p`
  position: relative;
  display: flex;
  justify-content: space-between;
  font-family: Circe, sans-serif;
  font-style: 18px;
  font-weight: 700;
  margin-bottom: 20px;
  &::after {
    position: absolute;
    content: '';
    bottom: -8px;
    left: -25px;
    width: 100%;
    min-width: 280px;
    border-bottom: 1px solid #dcdcdf;
  }
  &:last-child {
    margin-bottom: 0;
    &::after {
      border-bottom: none;
    }
  }
`;

const Span = styled.span`
  font-family: Circe, sans-serif;
  font-weight: ${p => (p.typeTr ? 700 : 400)};
  font-style: 16px;
  color: ${p => {
    switch (p.typeTr) {
      case '-':
        return '#FF6596';
      case '+':
        return '#24CCA7';
      default:
        return ``;
    }
  }};
`;
const THead = styled.th`
  font-family: Circe, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  padding: 16px 0 15px;
  border-radius: 30px;
`;

const Cell = styled.td`
  font-family: Circe, sans-serif;
  font-weight: 400;
  padding: 12px 20px 8px;
  font-size: 16px;
  line-height: 1.5;
`;
