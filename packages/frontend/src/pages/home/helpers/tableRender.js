import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import { nanoid } from 'nanoid';

import {
  ConteinerTable,
  TableContent,
  Row,
  THead,
  TableRowBody,
  Cell,
} from '../index.styled';

export const tableRender = datas => {
  const table = datas && (
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
          {datas.map(data => (
            <TableRowBody key={nanoid()}>
              <Cell component="th" scope="row">
                {data.date}
              </Cell>
              <Cell align="right">{data.type}</Cell>
              <Cell align="right">{data.category}</Cell>
              <Cell align="right">{data.comment}</Cell>
              <Cell align="right" typeTr={data.type}>
                {data.sum}
              </Cell>
              <Cell align="right">{data.balance}</Cell>
            </TableRowBody>
          ))}
        </TableBody>
      </TableContent>
    </ConteinerTable>
  );
  return table;
};
