import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import { format, parseISO } from 'date-fns';
import { nanoid } from 'nanoid';

import {
  ConteinerTable,
  TableContent,
  Row,
  THead,
  TableRowBody,
  Cell,
} from '../index.styled';

export const TableRender = ({ data }) => {
  const table = data && (
    <ConteinerTable>
      <TableContent>
        <TableHead
          sx={{
            display: 'flex',
            backgroundColor: '#fff',
            borderRadius: 1.5,
          }}
        >
          <Row>
            <THead>Date</THead>
            <THead>Type</THead>
            <THead>Category</THead>
            <THead>Comment</THead>
            <THead>Sum</THead>
            <THead>Balance</THead>
          </Row>
        </TableHead>
        <TableBody>
          {data.map(({ date, isIncome, category, balance, sum, comment }) => (
            <TableRowBody key={nanoid()}>
              <Cell component="th" scope="row">
                {format(parseISO(date), 'dd.MM.yyyy')}
              </Cell>
              <Cell align="right">{isIncome ? '+' : '-'}</Cell>
              <Cell align="right">{category}</Cell>
              <Cell align="right">{comment}</Cell>
              <Cell align="right" typeTr={isIncome ? '+' : '-'}>
                {sum}
              </Cell>
              <Cell align="right">{balance}</Cell>
            </TableRowBody>
          ))}
        </TableBody>
      </TableContent>
    </ConteinerTable>
  );
  return table;
};
